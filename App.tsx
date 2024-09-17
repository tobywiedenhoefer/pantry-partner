import { useEffect } from "react";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  useEffect(() => {
    if (loaded) {
      // hide splash screen
    }
  }, [loaded]);
  return loaded ? (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
