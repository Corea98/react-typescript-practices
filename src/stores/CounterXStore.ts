import { action, autorun, makeObservable, observable, runInAction } from "mobx";

class CounterXStore {
    @observable countX: number = 0;
    @observable expensiveCalculation: number = 0;

    constructor() {
        makeObservable(this)

        autorun(() => {
            console.log("Calculating value");
            let result = 0;
            for (let i = 0 ; i < 1000000000 ; i++) {
                result += 1;
            }

            const newValue = (result / 200) + this.countX;

            runInAction(() => {
                this.expensiveCalculation = newValue;
            })
        })
    }

    @action
    increment() {
        console.log("CountX incremented")
        this.countX++;
    }

    @action
    decrement() {
        this.countX--;
    }
}

export default CounterXStore;