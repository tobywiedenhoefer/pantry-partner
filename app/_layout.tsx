import "../tamagui-web.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack, useRouter, useSegments } from "expo-router";

import { useColorScheme } from "react-native";

import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!authState?.authenticated && inAuthGroup) {
      router.replace("/");
    } else if (authState?.authenticated) {
      router.replace("(auth)");
    }
  }, [authState]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <AuthProvider>
        <StackLayout />
      </AuthProvider>
    </TamaguiProvider>
  );
}
