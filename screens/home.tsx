import * as React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import type {
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";

import Following from "./following";
import ForYou from "./for-you";

const renderScene = SceneMap({
  first: ForYou,
  second: Following,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "For You" },
    { key: "second", title: "Following" },
  ]);

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<any>;
    }
  ) => {
    return (
      <>
        <TabBar
          style={{ backgroundColor: "#657786" }}
          indicatorStyle={{ backgroundColor: "#FFFFFF", height: 1.5 }}
          pressColor="#FFFFFF"
          {...props}
        />
      </>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}
