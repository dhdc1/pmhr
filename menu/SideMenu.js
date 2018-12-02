import React from 'react';
import { DrawerItems } from 'react-navigation';
import { View, Text,Button } from 'react-native';
import { Constants } from 'expo';

const SideMenu = props => (
  <View
    style={{
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#ffcc',
    }}>
    <Text style={{ fontSize: 56 }}>Header</Text>
    <Button title='OK' />
  </View>
);
export default SideMenu;