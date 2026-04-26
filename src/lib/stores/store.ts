import { createContext } from "react";
import counterStore from "./counterStore";

interface Store {
  counterStore: counterStore;
}

export const store: Store = {
  counterStore: new counterStore(),
};

export const StoreContext = createContext(store);
