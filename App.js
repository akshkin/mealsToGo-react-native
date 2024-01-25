import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import styled from "styled-components/native";

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justifycontent: center;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export default function App() {
  return (
    <StyledSafeArea>
      <ExpoStatusBar style="auto" />
      <RestaurantScreen />
    </StyledSafeArea>
  );
}
