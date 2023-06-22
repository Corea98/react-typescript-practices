import { observer } from "mobx-react";
import counterStore from "../../stores/CounterStore";

const RenderButtons = () => {

    const handleIncreaseCounter = () => {
        counterStore.increment();
    }

    const handleIncreaseCounter2 = () => {
        counterStore.incrementCount2();
    }

    const handleDecreaseCounter = () => {
        counterStore.decrement();
    }

    const handleDecreaseCounter2 = () => {
        counterStore.decrementCount2();
    }

    const handleFetchFakeValue = () => {
        counterStore.fetchCountFromServer();
    }

    return (
        <>
            <button onClick={ handleIncreaseCounter }>Increase counter</button>
            <button onClick={ handleDecreaseCounter }>Decrease counter</button>

            <br/>

            <button onClick={ handleIncreaseCounter2 }>Increase counter 2</button>
            <button onClick={ handleDecreaseCounter2 }>Decrease counter 2</button>

            <br/>

            <button onClick={ handleFetchFakeValue }>Fetch fake value</button>
        </>
    )
}

export default observer(RenderButtons);