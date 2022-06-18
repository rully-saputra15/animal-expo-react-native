import React from "react";
import {extendTheme, NativeBaseProvider} from "native-base";
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import HomeContainer from "./src/container/HomeContainer";
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic
} from "@expo-google-fonts/lato";
import Main from "./src/Main";

// Define the config
const config = {
  useSystemColorMode: false,
  //initialColorMode: "dark",
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
const App = () => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic
  });
  if (!fontsLoaded) {
    return (<AppLoading/>)
  } else {
    return (
      <NativeBaseProvider config={config}>
        <Main />
      </NativeBaseProvider>
    );
  }
}


export default App;
