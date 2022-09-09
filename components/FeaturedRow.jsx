import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  let x;
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard */}

        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi!!"
          rating={4.5}
          genre="Japanese"
          address="213 Main Street"
          short_description="Amazing food from Japan"
          dishes={[]}
          long={20}
          lat={0}
        />

        {/* {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.title}
            short_description={restaurant.short_description}
            address={restaurant.address}
            genre={restaurant.type?.name}
            rating={restaurant.rating}
            long={restaurant.long}
            lat={restaurant.lat}
            dishes={restaurant.dishes}
          />
        ))} */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
