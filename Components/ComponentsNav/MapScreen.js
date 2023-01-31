import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Maps from "./Maps";
import NavigatorCard from "./NavigatorCard";
import RideOptionCard from "./RideOptionCard";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigatorCard"
            component={NavigatorCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
