import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
// import { urlFor } from "../sanity";
import { EvilIcons } from "@expo/vector-icons";

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
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 2-46 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <EvilIcons name="star" size={22} opacity={0.5} color="green" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">
              {rating} * {genre}
            </Text>
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <EvilIcons name="location" size={22} color="gray" opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby * {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
