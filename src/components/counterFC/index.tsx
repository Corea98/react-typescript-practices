import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import IncreaseCountX from "../IncreaseCountX";
import { returnTheSameValue } from "../../typescript/tests";
import withAuth from "../HOC/withAuth";
import NeedsAuth from "../HOC/needsAuth";
import counterStore from "../../stores/CounterStore";
import { observer } from "mobx-react";

const MyComponentWithAuth = withAuth(NeedsAuth);

const RenderButtons = (
    {
        handleIncreaseCounter, 
        handleDecreaseCounter, 
        handleFetchFakeValue
    }: {
        handleIncreaseCounter: () => void, 
        handleDecreaseCounter: () => void, 
        handleFetchFakeValue: () => void
    }) => {
    return (
        <>
            <button onClick={ handleIncreaseCounter }>Increase counter</button>
            <button onClick={ handleDecreaseCounter }>Decrease counter</button>

            <br/>

            <button onClick={ handleFetchFakeValue }>Fetch fake value</button>
        </>
    )
}

const Counter = () => {
    
    const [countX, setCountX] = useState(0);
    const hiddenCount = useRef<number>(0);


    useEffect(() => {
        const value = returnTheSameValue<number, string>(5, "Oscar");
        console.log(typeof value);

        console.log("Component counter is mounted");

        return () => {
            console.log("Component counter will unmount");
        }
    }, []);

    useEffect(() => {
        console.log("count variable updated", counterStore.count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counterStore.count]);

    const expensiveCalculation = useMemo(() => {
        let result = 0;
        for (let i = 0 ; i < 1000000000 ; i++) {
            result += 1;
        }

        return (result / 200) + countX;
    }, [countX]);

    const handleIncreaseCountX = useCallback(() => {
        setCountX((value) => value + 1)
    }, [])

    const handleIncreaseCounter = () => {
        counterStore.increment();
    }

    const handleDecreaseCounter = () => {
        counterStore.decrement();
    }

    const handleFetchFakeValue = () => {
        counterStore.fetchCountFromServer();
    }

    const handleIncreaseHiddenCount = () => {
        hiddenCount.current += 1;
    }

    const handleLogHiddenCount = () => {
        console.log("HiddenCount is", hiddenCount.current)
    }

    console.log("Rendering the counter");

    return (
        <>
            <p>This is the counter component</p>
            <p>{ counterStore.count }</p>

            { counterStore.loading ? (
                <p>Loading value...</p>
            ) : (
                <RenderButtons
                    handleIncreaseCounter={ handleIncreaseCounter }
                    handleDecreaseCounter={ handleDecreaseCounter }
                    handleFetchFakeValue={ handleFetchFakeValue }
                ></RenderButtons>
            )}

            <br/>

            <button onClick={ handleIncreaseHiddenCount }>Increase HiddenCount</button>
            <button onClick={ handleLogHiddenCount }>Log HiddenCount</button>

            <p>Result of calculation + countX is: { expensiveCalculation }</p>

            <IncreaseCountX handleClick={handleIncreaseCountX}>
                <p>Richard</p>
            </IncreaseCountX>

            <MyComponentWithAuth />
        </>
    )
}

export default observer(Counter);