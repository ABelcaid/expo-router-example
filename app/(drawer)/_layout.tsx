import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useSegments } from "expo-router";

export default function Layout() {
  const segments = useSegments();

  const headerShown = segments.includes("edit-profile");

  console.log(headerShown);

  return (
    <Drawer
      screenOptions={{
        title: "My App",
        headerTitleAlign: "center",
        headerRight: () => (
          <Ionicons
            name="notifications"
            size={24}
            color="black"
            style={{ margin: 2 }}
          />
        ),
        headerShown: !headerShown,
      }}
    />
  );
}
