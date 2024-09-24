import { H1, YStack } from "tamagui";

import Background from "../components/Background";
import Form from "../components/Form";

export default function Login() {
  return (
    <Background variant="primary">
      <YStack>
        <Form onSubmit={() => {}}>
          <H1>Login</H1>
        </Form>
      </YStack>
    </Background>
  );
}
