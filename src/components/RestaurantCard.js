import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quartenary};
`;

const StyledText = styled.Text`
  padding: ${({ theme }) => theme.sizes[0]};
`;

function RestaurantCard({ restaurant = {} }) {
  const {
    name = "Maria's kitchen",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    address = "Nobeltorget",
    isOpen = true,
    rating = 4.9,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <StyledCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }}></Card.Cover>
      <StyledText>{name}</StyledText>
    </StyledCard>
  );
}

export default RestaurantCard;
