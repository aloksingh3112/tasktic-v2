import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GoalsScreen from '../screens/GoalsScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProgressScreen from '../screens/ProgressScreen';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/color';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Calendar':
            iconName = 'calendar-outline';
            break;
          case 'Goals':
            iconName = 'trophy-outline';
            break;
          case 'Community':
            iconName = 'people-outline';
            break;
          case 'Progress':
            iconName = 'bar-chart-outline';
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
    <Tab.Screen name="Goals" component={GoalsScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Progress" component={ProgressScreen} />
  </Tab.Navigator>
);

export default BottomTabs;
