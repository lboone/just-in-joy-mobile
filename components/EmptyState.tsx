import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

interface Props {
  img?: any;
  message?: string;
  description?: string;
}
const EmptyState = ({
  img = images.emptyState,
  message,
  description,
}: Props) => {
  return (
    <View
      className={
        "flex flex-col items-center justify-center w-full gap-10 pt-10"
      }
    >
      <Image source={img} resizeMode={"cover"} />
      <Text className={"text-2xl font-medium"}>
        {message || "Nothing matched your search"}
      </Text>
      <Text className={"text-gray-100 text-lg"}>
        {description || "Try a different search term or check for typos."}
      </Text>
    </View>
  );
};
export default EmptyState;
