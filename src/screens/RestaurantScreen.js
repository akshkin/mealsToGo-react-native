import React from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";
import RestaurantCard from "../components/RestaurantCard";

function RestaurantScreen() {
  return (
    <>
      <View style={styles.search}>
        <SearchInput />
      </View>
      <View style={styles.list}>
        <RestaurantCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    marginTop: StatusBar.currentHeight,
    padding: 8,
  },
  list: {
    flex: 1,
    padding: 8,
    backgroundColor: "orange",
  },
});

export default RestaurantScreen;
