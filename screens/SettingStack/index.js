import React from 'react';
import { View } from 'native-base';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { Ionicons as Icon, AntDesign as Acon } from '@expo/vector-icons';

import IndexScreen from './IndexScreen';
import PersonalScreen from './PersonalScreen';

const tab = createMaterialTopTabNavigator(
  {
    Index: IndexScreen,
    Personal: PersonalScreen,
  },
  {
    tabBarPosition: 'bottom',
  }
);

const stack = createStackNavigator({
  Setting: {
    screen: tab,
    navigationOptions: ({ navigation }) => ({
      title: 'ตั้งค่า',
      headerLeft: (
        <View style={{ flex: 1, paddingLeft: 5 }}>
          <Icon
            name="md-menu"
            size={24}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
      ),
    }),
  },
});

export default stack;
