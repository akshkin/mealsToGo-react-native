import React from "react";
import SearchInput from "../components/SearchInput";
import RestaurantCard from "../components/Restaurant/RestaurantCard";
import styled from "styled-components/native";
import { FlatList } from "react-native";

const StyledList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
`;

function RestaurantScreen() {
  return (
    <>
      <SearchInput />

      <StyledList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
        ]}
        renderItem={() => <RestaurantCard />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
}

export default RestaurantScreen;
