import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "./RootNavigation";

import AppStack from "./AppStack";

const Navigator: React.FC = () => {
  useEffect(() => {
    return () => {
      (isReadyRef as React.MutableRefObject<unknown>).current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        (isReadyRef as React.MutableRefObject<unknown>).current = true;
      }}
    >
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigator;
