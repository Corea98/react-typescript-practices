import { action, autorun, flow, makeObservable, observable, reaction, when } from "mobx";
import { fetchFakeCount } from "../util/util";

class CounterStore {
    @observable count: number = 0;
    @observable count2: number = 0;
    @observable loading: boolean = false;

    constructor() {
        makeObservable(this)
        this.fetchCountFromServer();
        this.setupReactions();
    }

    setupReactions() {
        autorun(() => {
            console.log('MobX: autorun: Counter 2 state was updated', this.count2);
        })

        reaction(
            () => this.count,
            (count) => {
                document.title = `Total count: ${ count }`
            }
        )

        when(
            () => this.count2 > 5,
            () => console.log("Mobx: when: Counter 2 is greater than 5"),
        )
    }

    @action
    increment() {
        this.count++;
    }

    @action
    incrementCount2() {
        this.count2++;
    }

    @action
    decrement() {
        this.count--;
    }

    @action
    decrementCount2() {
        this.count2--;
    }

    @flow
    *fetchCountFromServer(): Generator<Promise<number>, void, number> {
        this.loading = true;

        const response: number = yield fetchFakeCount();
        this.count = response;

        this.loading = false;
    }
}

export default CounterStore;