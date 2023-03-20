import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ title: "Edit Profile" }} name="edit-profile" />
    </Stack>
  );
}
