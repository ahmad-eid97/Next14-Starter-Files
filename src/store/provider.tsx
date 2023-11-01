'use client';
//== Modules
import { Provider } from "react-redux";
//== Store
import { store } from "./store";

function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider;