import React from "react";
import {} from "react-native";
import { View } from "native-base";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import {} from "expo";
import { DrawerActions } from "react-navigation";
import { Ionicons as Icon, AntDesign as Acon } from "@expo/vector-icons";

import LabScreen from "./LabScreen";

const tab = createMaterialTopTabNavigator(
  {
    Lab: LabScreen,
    Diag: () => null,
    Drug: () => null
  },
  {
    
    tabBarPosition: "bottom",
    tabBarOptions: {
      //scrollEnabled: true,
    }
  }
);

const stack = createStackNavigator({
  Pmhr: {
    screen: tab,
    navigationOptions: ({ navigation }) => ({
      title: "PMHR",
      headerLeft: (
        <View style={{ flex: 1, paddingLeft: 5 }}>
          <Icon
            name="md-menu"
            size={24}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
      )
    })
  }
});

export default stack;
