import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import IncreaseCountX from "../IncreaseCountX";
import { returnTheSameValue } from "../../typescript/tests";



const Counter = () => {

    const [count, setCount] = useState<number>(0);
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
        console.log("count variable updated", count);
    }, [count]);

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
        setCount(count + 1)
    }

    const handleDecreaseCounter = () => {
        setCount(count - 1)
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
            <p>{ count }</p>

            <button onClick={ handleIncreaseCounter }>Increase counter</button>
            <button onClick={ handleDecreaseCounter }>Decrease counter</button>

            <br/>

            <button onClick={ handleIncreaseHiddenCount }>Increase HiddenCount</button>
            <button onClick={ handleLogHiddenCount }>Log HiddenCount</button>

            <p>Result of calculation + countX is: { expensiveCalculation }</p>

            <IncreaseCountX handleClick={handleIncreaseCountX}>
                <p>Richard</p>
            </IncreaseCountX>
        </>
    )
}

export default Counter;