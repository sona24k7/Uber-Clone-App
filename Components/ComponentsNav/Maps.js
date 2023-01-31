import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapsView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../navReducer";

const Maps = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapsView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapsView>
  );
};

export default Maps;

const styles = StyleSheet.create({});
