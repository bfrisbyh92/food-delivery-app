import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
// import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  short_description,
  address,
  genre,
  rating,
  long,
  lat,
  dishes,
}) => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Text>RestaurantCard</Text>
    </View>
  );
};

export default RestaurantCard;
