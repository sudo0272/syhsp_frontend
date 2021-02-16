import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import SettingsScreen from './components/SettingsScreen';
import CommunityScreen from './components/CommunityScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: '달력',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                color={color}
                size={24}
              />
            )
          }}
        />
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-variant-outline"
                color={color}
                size={24}
              />
            )
          }}
        />
        <Tab.Screen
          name="community"
          component={CommunityScreen}
          options={{
            tabBarLabel: '커뮤니티',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="forum"
                color={color}
                size={24}
              />
            )
          }}
        />
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: '설정',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={24}
              />
            )
          }}
        />
      </Tab.Navigator>
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
