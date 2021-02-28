import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import SettingsScreen from './components/SettingsScreen';
import CommunityScreen from './components/CommunityScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuTab = createMaterialBottomTabNavigator();
const TAB_BAR_ICON_COLOR = '#000';
const TAB_BAR_ICON_SIZE = 24;

export default function App() {
  return (
    <NavigationContainer>
      <MenuTab.Navigator
        activeColor="#000"
        inactiveColor="#000"
        barStyle={{ backgroundColor: '#fff' }}>
        <MenuTab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home-variant-outline"
                color={TAB_BAR_ICON_COLOR}
                size={TAB_BAR_ICON_SIZE}
              />
            ),
          }}
        />
        <MenuTab.Screen
          name="calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: '달력',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                color={TAB_BAR_ICON_COLOR}
                size={TAB_BAR_ICON_SIZE}
              />
            ),
          }}
        />
        <MenuTab.Screen
          name="community"
          component={CommunityScreen}
          options={{
            tabBarLabel: '커뮤니티',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="forum-outline"
                color={TAB_BAR_ICON_COLOR}
                size={TAB_BAR_ICON_SIZE}
              />
            ),
          }}
        />
        <MenuTab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: '설정',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-outline"
                color={TAB_BAR_ICON_COLOR}
                size={TAB_BAR_ICON_SIZE}
              />
            ),
          }}
        />
      </MenuTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

