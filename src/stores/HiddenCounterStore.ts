import { action, makeObservable } from "mobx";

class HiddenCounterStore {
    hiddenCount: number = 0;

    constructor() {
        makeObservable(this)
    }

    @action
    incrementHiddenCount() {
        this.hiddenCount++;
    }
}

export default HiddenCounterStore;