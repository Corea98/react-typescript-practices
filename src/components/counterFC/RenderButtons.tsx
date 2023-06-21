import { observer } from "mobx-react";
import counterStore from "../../stores/CounterStore";

const RenderButtons = () => {

    const handleIncreaseCounter = () => {
        counterStore.increment();
    }

    const handleDecreaseCounter = () => {
        counterStore.decrement();
    }

    const handleFetchFakeValue = () => {
        counterStore.fetchCountFromServer();
    }

    return (
        <>
            <button onClick={ handleIncreaseCounter }>Increase counter</button>
            <button onClick={ handleDecreaseCounter }>Decrease counter</button>

            <br/>

            <button onClick={ handleFetchFakeValue }>Fetch fake value</button>
        </>
    )
}

export default observer(RenderButtons);