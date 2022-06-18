import React from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {HomeStackNavigator} from "./stackNavigators/HomeStackNavigator";

const Main = () => {
  const mainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white"
    }
  };
  return (
    <>
      <NavigationContainer theme={mainTheme}>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  )
};

export default Main;
