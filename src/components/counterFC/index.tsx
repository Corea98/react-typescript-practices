import { useCallback, useContext, useMemo, useRef, useState } from "react";
import IncreaseCountX from "../IncreaseCountX";
import withAuth from "../HOC/withAuth";
import NeedsAuth from "../HOC/needsAuth";
import RootStore from "../../stores";
import { observer } from "mobx-react";
import RenderButtons from "./RenderButtons";
import { RootStoreContext } from "../../context";

const MyComponentWithAuth = withAuth(NeedsAuth);

const Counter = () => {

    const { counterStore, counterXStore, hiddenCounterStore } = useContext(RootStoreContext) as RootStore;

    const handleIncreaseHiddenCount = () => {
        hiddenCounterStore.incrementHiddenCount();
    }

    const handleLogHiddenCount = () => {
        console.log("HiddenCount is", hiddenCounterStore.hiddenCount)
    }

    console.log("Rendering the counter");

    return (
        <>
            <p>This is the counter component</p>
            <p>Count: { counterStore.count }</p>
            <p>Count2: { counterStore.count2 }</p>

            { counterStore.loading ? (
                <p>Loading value...</p>
            ) : (
                <RenderButtons />
            )}

            <br/>

            <button onClick={ handleIncreaseHiddenCount }>Increase HiddenCount</button>
            <button onClick={ handleLogHiddenCount }>Log HiddenCount</button>

            <p>Result of calculation + countX is: { counterXStore.expensiveCalculation }</p>

            <IncreaseCountX>
                <p>Richard</p>
            </IncreaseCountX>

            <MyComponentWithAuth />
        </>
    )
}

export default observer(Counter);