import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState(params.query);

  const handleSearch = (text: string) => {
    setQuery(text);

    if (!text) router.setParams({ query: undefined });
  };

  const handleSubmit = () => {
    if (query && query.trim()) router.setParams({ query });
  };
  return (
    <View className={"searchbar"}>
      <TextInput
        className={"flex-1 p-5"}
        placeholder={"Search for your favorite drink..."}
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={handleSubmit}
        returnKeyType={"search"}
        placeholderTextColor={"a0a0a0"}
      />
      <TouchableOpacity
        className={"pr-5"}
        onPress={() => router.setParams({ query })}
      >
        <Image
          source={images.search}
          className={"size-6"}
          resizeMode={"contain"}
          tintColor={"#5D5F6D"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;
