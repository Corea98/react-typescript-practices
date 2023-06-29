import { createContext } from "react";
import CounterStore from "../stores/CounterStore";
import RootStore from "../stores";
import CounterXStore from "../stores/CounterXStore";
import HiddenCounterStore from "../stores/HiddenCounterStore";

const counterStore = new CounterStore();
const counterXStore = new CounterXStore();
const hiddenCounterStore = new HiddenCounterStore();

export const rootStore = new RootStore(counterStore, counterXStore, hiddenCounterStore);
export const RootStoreContext = createContext<RootStore | null>(null);
