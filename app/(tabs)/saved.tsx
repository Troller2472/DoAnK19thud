import { icons } from "@/constants/icons";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const saved = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Save</Text>
        <Text className="text-gray-500 italic text-sm">
          Your movie you saved will be here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default saved;

const styles = StyleSheet.create({});
