import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Categories from "../components/Categories";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-y bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <AntDesign name="downcircleo" size={20} color="#00CCBB" />
          </Text>
        </View>
        <FontAwesome5 name="user-circle" size={45} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <FontAwesome name="exchange" size={20} color="#00CCBB" />
      </View>

      {/* Body */}
      {/* <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{ 
           paddingBottom: 100,
           }}
           >
           <Text>Body</Text>
           </ScrollView> */}

           {/* Categories */}
           <Categories />

           {/* Featured Rows */}
           
    </SafeAreaView>
  );
}
