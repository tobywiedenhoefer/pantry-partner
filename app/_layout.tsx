import "../tamagui-web.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack } from "expo-router";

import { useColorScheme } from "react-native";

import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    // add this

    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  );
}
