import React from "react";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import store, {persistor} from "./src/store";
import {AppNavigator} from "./src/navigation/AppNavigator";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
