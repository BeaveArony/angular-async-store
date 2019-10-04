import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, isObservable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

export interface AsyncState<T> {
  state: T | null;
  loading: boolean;
  error: string | null;
}

const initialState: AsyncState<any> = {
  state: null,
  loading: false,
  error: null
};

export interface AsyncStateServiceConfig {
  caller: string;
  logStateChanges: boolean;
  sendAnalytics: boolean;
}

@Injectable()
export class AsyncStoreService<State> extends BehaviorSubject<AsyncState<State>>
  implements OnDestroy {
  private subs: Subscription[] = [];
  private config: AsyncStateServiceConfig = {
    caller: '',
    logStateChanges: true,
    sendAnalytics: true
  };

  constructor(private route: ActivatedRoute) {
    super(initialState);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    });
  }

  /** Set the configuration for this service */
  configure(config: Partial<AsyncStateServiceConfig>) {
    this.config = { ...this.config, ...config };
  }

  /** Add a new state by reducing the new partial data into the existing one by shalow copying them */
  setState(value: Partial<AsyncState<State>> = {}) {
    this.next({
      ...this.getValue(),
      ...value
      // state: { ...value.state }
    });
    this.log(value);
  }

  /** Get the current state */
  getState() {
    return this.getValue();
  }

  handleSubscription(
    obs: ((id: string) => Observable<State>) | Observable<State>
    // project: (val: T) => Partial<AsyncState<State>>,
    // error?: (err: any) => void
  ) {
    const data$ = isObservable(obs)
      ? obs
      : obs(this.route.snapshot.paramMap.get('id'));

    this.subs.push(
      data$
        .pipe(
          map(
            val =>
              ({ loading: false, error: null, state: val } as Partial<
                AsyncState<State>
              >)
          ),
          startWith({ loading: true, error: null } as Partial<
            AsyncState<State>
          >)
        )
        .subscribe({
          next: val => {
            this.setState(val);
          },
          error: err => {
            this.setState({
              error: err.message ? err.message : err.toString(),
              loading: false
            });
          }
        })
    );
  }

  private log(action: Partial<AsyncState<State>>) {
    // Logging
    if (this.config.logStateChanges) {
      const state = this.getValue();
      console.log(
        '%cASYNC STATE CHANGED',
        'font-weight: bold',
        '\r\nAction: ',
        action,
        this.config.caller,
        '\r\nState: ',
        state
      );
    }
    // Analytics
    if (this.config.sendAnalytics && this.getValue().error) {
      try {
        // Send to Analytics ...
      } catch (error) {
        console.error(error);
      }
    }
  }
}
