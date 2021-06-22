import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SingIn } from "../screens";
import { COLORS } from "../constants";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="SingIn"
        screenOptions={{
          cardStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      >
        <Stack.Screen name="SingIn" component={SingIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
