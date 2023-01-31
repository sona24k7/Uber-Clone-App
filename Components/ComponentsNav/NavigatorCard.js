import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../navReducer";
import { useNavigation } from "@react-navigation/native";
import RideOptionCard from "./RideOptionCard";
const NavigatorCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Tarun</Text>
      <View style={tw` border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          placeholder="Destination"
          styles={toInputBoxStyles}
          onPress={(data, details = null) => {
            console.log(data, details);
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionCard");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigatorCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#D3D3D3",
    borderRadius: 6,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
