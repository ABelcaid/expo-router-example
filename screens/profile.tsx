import { Link, useRouter, useSegments } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>

      <Text
        onPress={() => {
          router.push("/(drawer)/(tabs)/profile/edit-profile");
        }}
      >
        Edit Profile
      </Text>

      {/* <Link href="/(drawer)/(tabs)/profile/edit-profile">Edit Profile</Link> */}
    </View>
  );
}
