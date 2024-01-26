import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const StyledSearch = styled(Searchbar)`
  margin: ${({ theme }) => theme.sizes[1]};
`;

function SearchInput() {
  return <StyledSearch />;
}

export default SearchInput;
