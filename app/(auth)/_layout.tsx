import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";

export default function AuthLayout() {
  const { authState } = useAuth();
  const router = useRouter();
  if (!authState?.authenticated) {
    return router.replace("/");
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
