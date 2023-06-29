import { action, computed, makeObservable, observable } from "mobx";

class CounterXStore {
    @observable countX: number = 0;

    constructor() {
        makeObservable(this)
    }

    @computed
    get expensiveCalculation() {
        console.log("Calculating value");
        let result = 0;
        for (let i = 0 ; i < 1000000000 ; i++) {
            result += 1;
        }

        return (result / 200) + this.countX;
    }

    @action
    increment() {
        this.countX++;
    }

    @action
    decrement() {
        this.countX--;
    }
}

export default CounterXStore;