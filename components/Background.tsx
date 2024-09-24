import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GetProps, H1, styled, View } from "tamagui";

const StyledBackground = styled(View, {
  name: "Background",
  theme: "purple_active",
  variants: {
    variant: {
      primary: {
        backgroundColor: "$purple5Light",
      },
      accented: {},
    },
  },
  flex: 1,
});

type StyledBackgroundProps = GetProps<typeof StyledBackground>;
type BackgroundProps = StyledBackgroundProps;
export default function Background(props: BackgroundProps) {
  const { children, ...styledProps } = props;
  return (
    <StyledBackground {...styledProps}>
      <SafeAreaView>
        <View height={"100%"}>{children}</View>
      </SafeAreaView>
    </StyledBackground>
  );
}
