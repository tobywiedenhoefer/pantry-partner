import React from "react";
import { Form as TForm, View } from "tamagui";
import Button from "./Button";

type FormProps = {
  children?: React.ReactNode;
  onSubmit: () => void;
  secondaryButton?: { verbiage: string; action: () => void };
};
export default function Form(props: FormProps) {
  return (
    <TForm
      gap="$2"
      borderWidth={1}
      borderRadius={"$4"}
      backgroundColor={"$background"}
      borderBlockColor={"$borderColor"}
      padding={"$2"}
    >
      <View marginVertical={"$4"}>{props.children}</View>
      <TForm.Trigger asChild>
        <Button variant="primary"></Button>
      </TForm.Trigger>
      {props.secondaryButton ? (
        <Button onPress={() => props.secondaryButton?.action()}>
          {props.secondaryButton.verbiage}
        </Button>
      ) : null}
    </TForm>
  );
}
