import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./Components/Screen/HomeScreen";
import MapScreen from "./Components/ComponentsNav/MapScreen";
import EatsScreen from "./Components/ComponentsNav/EatsScreen";
import { store } from "./Components/Store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEMAPSAPIKEY } from "@env";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
