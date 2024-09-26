import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Input, Label, YStack } from "tamagui";

type FormRowProps = {
  label: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
export default function FormRow(props: FormRowProps) {
  return (
    <YStack>
      <Input
        display="flex"
        flexDirection="column"
        placeholder={props.label}
        size={"$5"}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </YStack>
  );
}
