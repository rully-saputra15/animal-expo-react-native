import React from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {HomeStackNavigator} from "./stackNavigators/HomeStackNavigator";
import {QueryClient, QueryClientProvider} from "react-query";

const Main = () => {
  const mainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white"
    }
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5000,
        cacheTime: 2000
      }
    }
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={mainTheme}>
          <HomeStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  )
};

export default Main;
