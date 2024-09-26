import React from "react";
import { Form as TForm, View, XStack, YStack } from "tamagui";
import Button from "./Button";

type FormProps = {
  children?: React.ReactNode;
  primaryButton: { verbiage: string; action: () => void };
  secondaryButton: { verbiage: string; action: () => void };
};
export default function Form(props: FormProps) {
  return (
    <TForm
      gap="$2"
      borderRadius={"$8"}
      backgroundColor={"$background"}
      borderBlockColor={"$borderColor"}
      padding={"$4"}
      shadowOffset={"$0.5"}
      shadowOpacity={0.4}
      shadowRadius={"$6"}
      onSubmit={props.primaryButton.action}
    >
      <YStack marginVertical={"$4"} gap={"$4"}>
        {props.children}
      </YStack>
      <XStack display="flex">
        <View width={"40%"}>
          <Button
            variant="secondary"
            onPress={props.secondaryButton.action}
            marginRight={"$2"}
            padding={0}
          >
            {props.secondaryButton.verbiage}
          </Button>
        </View>
        <View width={"60%"}>
          <TForm.Trigger asChild width={"revert"}>
            <Button variant="primary" marginLeft={"$2"} padding={0}>
              {props.primaryButton.verbiage}
            </Button>
          </TForm.Trigger>
        </View>
      </XStack>
    </TForm>
  );
}
