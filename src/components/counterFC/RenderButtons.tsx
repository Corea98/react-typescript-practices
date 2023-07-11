import { observer } from "mobx-react";
import RootStore from "../../stores";
import { useContext } from "react";
import { RootStoreContext } from "../../context";
import styled from "styled-components";

const StyledButton = styled.button<{ $primary?: boolean }>`
    padding: 7px 10px;
    outline: none;
    color: ${ props => props.$primary ? "red" : "yellow" };
    background: black;
    cursor: pointer;

    &:hover {
        background: white;
        color: black;
    }
`;

const RenderButtons = () => {

    const rootStore = useContext(RootStoreContext) as RootStore;
    const { counterStore } = rootStore;

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
            <StyledButton $primary onClick={ handleIncreaseCounter }>Increase counter</StyledButton>
            <StyledButton onClick={ handleDecreaseCounter }>Decrease counter</StyledButton>

            <br/>

            <StyledButton onClick={ handleIncreaseCounter2 }>Increase counter 2</StyledButton>
            <StyledButton onClick={ handleDecreaseCounter2 }>Decrease counter 2</StyledButton>

            <br/>

            <StyledButton onClick={ handleFetchFakeValue }>Fetch fake value</StyledButton>
        </>
    )
}

export default observer(RenderButtons);