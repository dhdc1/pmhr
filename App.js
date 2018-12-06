import React from "react";

import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

//import { Container, Content } from 'native-base';
import { Avatar } from "react-native-elements";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  DrawerActions
} from "react-navigation";
import { Constants, AppLoading, Font } from "expo";
import { Ionicons as Icon, AntDesign as Acon } from "@expo/vector-icons";

import Home from "./screens/HomeStack";
import Setting from "./screens/SettingStack";
import Pmhr from "./screens/PmhrStack";

import { store } from "./stores";
import { Provider } from "react-redux";

const myApp = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "HOME",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },

    Pmhr: {
      screen: Pmhr,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "PMHR",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },
    Queue: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "QUEUE",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },

    Profile: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "PROFILE",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },

    Ihospital: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "iHOSPITAL",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },

    Document: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "DOCUMENT",
        drawerIcon: ({ tintColor }) => <Acon name="smileo" size={24} />
      })
    },

    Setting: {
      screen: Setting,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: () => null
      })
    }
  },
  {
    initialRouteName: "Home",

    contentComponent: function(props) {
      return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "teal",
                padding:8
              }}
            >
              {/* 
              <Image
                source={{
                  uri:
                    "http://www.domalberto.edu.br/wp-content/uploads/2017/02/joao.png"
                }}
                style={{ width: 150, height: 150 }}
                onPress={() => alert("Avatar")}
              />

              */}
              <Avatar
                size="xlarge"
                rounded
                ImageComponent ={true}
                source={{
                  uri:
                    "https://www.khaosod.co.th/wp-content/uploads/2018/07/thumb_67015_default_news_size_5.jpeg"
                }}
                onPress={() => alert("Works!")}
                activeOpacity={0.7}
              />

              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Setting");
                    props.navigation.dispatch(DrawerActions.closeDrawer());
                  }}
                >
                  <View style={{ padding: 5 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      ตั้งค่า
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text>
              {store.getState().name} {store.getState().lname}
            </Text>

            <View style={{ flex: 3 }}>
              <DrawerItems {...props} />
            </View>
          </ScrollView>
        </View>
      );
    }
  }
);

const AppContainer = createAppContainer(myApp);

const Main = () => (
  <View
    style={{
      flex: 1
    }}
  >
    <AppContainer />
  </View>
);

class App extends React.Component {
  state = { isReady: false };
  loadFont = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFont}
          onFinish={() => this.setState({ isReady: true })}
          onError={() => alert("Font error.")}
        />
      );
    }

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
