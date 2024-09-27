import { useEffect } from "react";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { View, YStack, H1, H3 } from "tamagui";

import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {}, [loaded]);
  return loaded ? (
    <View flex={1} backgroundColor={"$purple5Light"}>
      <SafeAreaView>
        <View alignItems="center" margin={"$3"} height={"100%"}>
          <YStack maxWidth={"750px"} width={"100%"}>
            <H1
              color={"$red12"}
              fontSize={"$12"}
              fontStyle="italic"
              lineHeight={"$12"}
              marginBottom="$1"
            >
              Howdy, Partner!
            </H1>
            <H3 marginBottom="$5" color={"$red12"} size={"$8"}>
              Welcome to your pantry's new partner.
            </H3>
          </YStack>
          <YStack flex={1} flexDirection="column-reverse">
            <YStack minWidth="100%">
              <Button variant="primary" marginBottom="$5">
                Get Started
              </Button>
              <Button
                variant="secondary"
                marginBottom="$8"
                onPress={() => router.navigate("/login")}
              >
                Login
              </Button>
            </YStack>
          </YStack>
        </View>
      </SafeAreaView>
    </View>
  ) : null;
};
