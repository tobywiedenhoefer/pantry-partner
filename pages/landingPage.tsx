import { View, YStack, useTheme, H1, Button } from "tamagui";

export default function LandingPage() {
  const theme = useTheme({ name: "purple_active" });
  return (
    <View flex={1} backgroundColor={theme.background.val}>
      <View alignItems="center" marginHorizontal={"$3"}>
        <YStack marginTop={"$13"} maxWidth={"750px"} width={"100%"}>
          <H1
            color={theme.accentColor.val}
            fontSize={"$12"}
            fontStyle="italic"
            lineHeight={"$12"}
            marginBottom="$5"
          >
            Howdy, Partner. Welcome to Pantry Partner!
          </H1>
          <Button
            marginBottom="$5"
            size={"$6"}
            fontFamily={"$mono"}
            backgroundColor={theme.accentColor}
            color={theme.background}
            pressStyle={{
              bg: theme.white1,
              borderColor: theme.white1,
              col: theme.red5Dark.val,
            }}
          >
            Get Started
          </Button>
          <Button
            backgroundColor={theme.yellow2}
            marginBottom="$5"
            fontSize={"$6"}
            size={"$6"}
            color={theme.red5Dark}
            fontFamily="$mono"
            pressStyle={{
              bg: theme.white1,
              borderColor: theme.white1,
              col: theme.red5Dark.val,
            }}
          >
            Login
          </Button>
        </YStack>
      </View>
    </View>
  );
}
