import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TweetScreen from "./screens/TweetScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home1"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
        component={NotificationsScreen}
      />
    </Tab.Navigator>
  );
}

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerBackTitleVisible: false }}
    >
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="New Tweet"
        component={NewTweetScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Tweet"
        component={TweetScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Home"}
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeStackNavigation} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
