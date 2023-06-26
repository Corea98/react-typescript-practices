import { action, autorun, computed, flow, makeObservable, observable, reaction, when } from "mobx";


const fetchFakeCount: () => Promise<number> = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(25)
        }, 1500);
    })
}

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

    @computed
    get expensiveCalculation() {
        console.log("Calculating value");
        let result = 0;
        for (let i = 0 ; i < 1000000000 ; i++) {
            result += 1;
        }

        return (result / 200) + this.count;
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

const counterStore = new CounterStore();
export default counterStore;