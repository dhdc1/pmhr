import React from 'react';
import { View } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { Ionicons as Icon, AntDesign as Acon } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
const stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'หน้าหลัก',     
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
