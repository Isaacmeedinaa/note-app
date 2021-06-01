import React from "react";

import { registerRootComponent } from "expo";

// React-Redux
import { Provider } from "react-redux";
import store from "./state/store";

import App from "./App";

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(Index);
