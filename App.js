import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.ui.quartenary};
  justifycontent: center;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeArea>
        <ExpoStatusBar style="auto" />
        <RestaurantScreen />
      </StyledSafeArea>
    </ThemeProvider>
  );
}
