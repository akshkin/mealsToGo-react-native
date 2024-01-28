import styled from "styled-components";
import { Card } from "react-native-paper";

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary};
  margin-bottom: ${({ theme }) => theme.sizes[1]};
`;

export const StyledCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StyledText = styled.Text`
  padding: ${({ theme }) => theme.sizes[1]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 0;
`;

export const StyledAddress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};

  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.sizes[1]};
  padding-top: 0;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => `${theme.sizes[0]} 0 ${theme.sizes[0]} 0`};
`;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
