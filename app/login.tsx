import { useRouter } from "expo-router";
import { H1, View, YStack } from "tamagui";

import Background from "../components/Background";
import Form from "../components/Form";
import FormRow from "../components/FormRow";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { onLogin } = useAuth();
  const router = useRouter();
  return (
    <Background variant="primary">
      <View
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="$10"
      >
        <YStack marginHorizontal="$4">
          <Form
            secondaryButton={{
              verbiage: "Cancel",
              action: () => router.back(),
            }}
            primaryButton={{
              verbiage: "Submit",
              action: () => {
                onLogin!("username", "string");
                router.replace("(auth)");
              },
            }}
          >
            <H1>Login</H1>
            <FormRow label="username" />
            <FormRow label="password" />
          </Form>
        </YStack>
      </View>
    </Background>
  );
}
