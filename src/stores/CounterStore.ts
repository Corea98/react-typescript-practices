import { action, makeObservable, observable } from "mobx";


class CounterStore {
    @observable count: number;

    constructor() {
        this.count = 0;

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
}

const counterStore = new CounterStore();
export default counterStore;