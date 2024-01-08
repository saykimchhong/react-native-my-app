// AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";

export enum RouteNames {
  Home = "Home",
  Profile = "Profilescreen",
}

export type RootStackParamList = {
  [RouteNames.Home]: undefined;
  [RouteNames.Profile]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteNames.Home}>
        <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
        <Stack.Screen name={RouteNames.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
