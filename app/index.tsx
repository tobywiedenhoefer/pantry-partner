import { useEffect } from "react";
import { useFonts } from "expo-font";
import { View, YStack, useTheme, H1, H3, H2 } from "tamagui";

import Button from "../components/Button";

export default () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  useEffect(() => {}, [loaded]);
  return loaded ? (
    <View flex={1} backgroundColor={"$purple5Light"}>
      <View alignItems="center" marginHorizontal={"$3"}>
        <YStack marginTop={"$13"} maxWidth={"750px"} width={"100%"}>
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
          <Button variant="primary" marginBottom="$5">
            Get Started
          </Button>
          <Button variant="secondary" marginBottom="$5">
            Login
          </Button>
        </YStack>
      </View>
    </View>
  ) : null;
};
