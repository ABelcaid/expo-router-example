import { Provider } from "@/context/auth";
import { Slot } from "expo-router";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <Provider>
      <Slot />
    </Provider>
  );
}
