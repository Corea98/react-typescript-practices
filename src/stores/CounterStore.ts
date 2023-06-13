import { action, flow, makeObservable, observable } from "mobx";


const fetchFakeCount: () => Promise<number> = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(25)
        }, 1500);
    })
}

class CounterStore {
    @observable count: number;
    @observable loading: boolean;

    constructor() {
        this.count = 0;
        this.loading = false;

        makeObservable(this)
    }

    @action
    increment() {
        this.count++;
    }

    @action
    decrement() {
        this.count--;
    }

    @flow
    *fetchCountFromServer(): Generator<Promise<number>, void, number> {
        this.loading = true;

        const response: number = yield fetchFakeCount();
        this.count = response;

        this.loading = false;
    }
}

const counterStore = new CounterStore();
export default counterStore;