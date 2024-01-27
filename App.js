import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.ui.quartenary};
  justifycontent: center;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledSafeArea>
        <ExpoStatusBar style="auto" />
        <RestaurantScreen />
      </StyledSafeArea>
    </ThemeProvider>
  );
}
