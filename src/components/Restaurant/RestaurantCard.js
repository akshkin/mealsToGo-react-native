import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star.js";
import open from "../../../assets/open.js";
import { Text } from "react-native";
import {
  StyledCard,
  StyledCardCover,
  StyledAddress,
  StyledText,
  Info,
  Icons,
  Rating,
} from "./restaurant.styles.js";

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
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }}></StyledCardCover>
      <StyledText>{name}</StyledText>
      <Info>
        <Icons>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={`item-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
          )}
          {isOpen && <SvgXml xml={open} width={20} height={20} />}
        </Icons>

        <StyledAddress>{address}</StyledAddress>
      </Info>
    </StyledCard>
  );
}

export default RestaurantCard;
