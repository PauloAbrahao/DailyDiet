import {ThemeProvider} from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import {theme} from "@config/theme/";

import {StatusBar} from "react-native";
import {Routes} from "./src/routes/";

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : null}
    </ThemeProvider>
  );
}
