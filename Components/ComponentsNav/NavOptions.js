import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../navReducer";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://cdn-icons-png.flaticon.com/512/75/75780.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://cdn-icons-png.flaticon.com/512/174/174386.png",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: item.image }}
            />

            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 w-10 mt-4`}
              name="rightcircle"
              color="black"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
