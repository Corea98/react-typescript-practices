import { action, makeObservable } from "mobx";
import CounterStore from "./CounterStore";
import CounterXStore from "./CounterXStore";
import HiddenCounterStore from "./HiddenCounterStore";

// This violates the single responsability principle

class RootStore {

    constructor (public counterStore: CounterStore, public counterXStore: CounterXStore, public hiddenCounterStore: HiddenCounterStore) {
        makeObservable(this);
    }

    @action
    incrementCounterStore() {
        console.log("CounterX incremented from root")
        this.counterXStore.increment();
    }
}

export default RootStore;