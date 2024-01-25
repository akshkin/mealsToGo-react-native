import React from "react";
import SearchInput from "../components/SearchInput";
import RestaurantCard from "../components/RestaurantCard";
import styled from "styled-components/native";

const StyledList = styled.View`
  flex: 1;
  padding: 8px;
  background-color: orange;
`;

function RestaurantScreen() {
  return (
    <>
      <SearchInput />
      <StyledList>
        <RestaurantCard />
      </StyledList>
    </>
  );
}

export default RestaurantScreen;
