import { render, screen, fireEvent } from "@testing-library/react";

import RootStore from "../../stores";
import CounterStore from "../../stores/CounterStore";
import CounterXStore from "../../stores/CounterXStore";
import HiddenCounterStore from "../../stores/HiddenCounterStore";
import { RootStoreContext } from "../../context";
import RenderButtons from "./RenderButtons";

describe("RenderButtons", () => {
    let counterStore: CounterStore, counterXStore: CounterXStore, hiddenCounterStore: HiddenCounterStore, rootStore: RootStore;

    function setupComponent(Component: React.FC) {
        return render(
            <RootStoreContext.Provider value={ rootStore }>
                <Component />
            </RootStoreContext.Provider>
        )
    }

    beforeEach(() => {
        counterStore = new CounterStore();
        counterXStore = new CounterXStore();
        hiddenCounterStore = new HiddenCounterStore();

        rootStore = new RootStore(counterStore, counterXStore, hiddenCounterStore);
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it("should call increment when 'Increase counter' button is clicked", () => {
        setupComponent(RenderButtons);

        const increaseButton = screen.getByText("Increase counter");
        fireEvent.click(increaseButton);
        expect(rootStore.counterStore.count).toBe(1);
    })

    fit("should increment count by 2 when increment is called", () => {
        const mockIncrementCount2 = jest.fn();
        counterStore.incrementCount2 = mockIncrementCount2.mockImplementation(() => {
            counterStore.count2 += 2
        })

        setupComponent(RenderButtons);

        const incrementButton2 = screen.getByText("Increase counter 2");
        fireEvent.click(incrementButton2);

        expect(counterStore.count2).toBe(2);
    });
})