import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from "../container/HomeContainer";
import AnimalDetailContainer from "../container/AnimalDetailContainer";


export const HomeStackNavigator = ({navigation} : any) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShadowVisible: true,
    }}>
      <Stack.Screen name="HomeScreen"
                    component={HomeContainer}
                    options={{
                      headerShown: false
                    }}
      />
      <Stack.Screen name="AnimalDetailScreen"
                    component={AnimalDetailContainer}
                    options={{
                      headerTitle: ""
                    }}
      />
    </Stack.Navigator>
  )
}
