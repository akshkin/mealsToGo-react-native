import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const StyledSearch = styled(Searchbar)`
  margin: 16px;
`;

function SearchInput() {
  return <StyledSearch />;
}

export default SearchInput;
