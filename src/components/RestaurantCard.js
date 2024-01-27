import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star.js";
import open from "../../assets/open.js";
import { Text } from "react-native";

// const star = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     viewBox="0 0 128 128"
//   >
//     <path
//       fill="#FDD835"
//       d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
//     />
//     <path
//       fill="#FFFF8D"
//       d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
//     />
//     <path
//       fill="#F4B400"
//       d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
//     />
//   </svg>
// );

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary};
`;

const StyledCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledText = styled.Text`
  padding: ${({ theme }) => theme.sizes[1]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 0;
`;

const StyledAddress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};

  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.sizes[1]};
  padding-top: 0;
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => `${theme.sizes[0]} 0 ${theme.sizes[0]} 0`};
`;

const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <StyledCard elevation={5}>
        <StyledCardCover
          key={name}
          source={{ uri: photos[0] }}
        ></StyledCardCover>
        <StyledText>{name}</StyledText>
        <Info>
          <Icons>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml
                  key={`item-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
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
    </>
  );
}

export default RestaurantCard;
