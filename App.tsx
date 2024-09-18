import { useEffect } from "react";

import { useFonts } from "expo-font";

import { TamaguiProvider } from "tamagui";

import tamaguiConfig from "./tamagui.config";

import LandingPage from "./pages/landingPage";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  useEffect(() => {}, [loaded]);
  return loaded ? (
    <TamaguiProvider config={tamaguiConfig}>
      <LandingPage />
    </TamaguiProvider>
  ) : null;
}
