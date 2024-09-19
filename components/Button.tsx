import { GetProps, Button as TButton, styled } from "tamagui";

const Button = styled(TButton, {
  name: "Button",
  fontFamily: "$mono",
  theme: "purple_active",
  size: "$6",
  pressStyle: {
    bg: "$white1",
    borderColor: "$white1",
    col: "$red12",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$red12",
        color: "$yellow2",
      },
      secondary: {
        backgroundColor: "$yellow2",
        color: "$red12",
      },
    },
  } as const,
});

export default Button;
