import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Forside',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              family="Ionicons" // Specify Ionicons here
            />
          ),
        }}
      />
      <Tabs.Screen
        name="App. udvikling"
        options={{
          title: 'App. udvikling',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
              family="Ionicons" // Specify Ionicons here
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Database Design"
        options={{
          title: 'Database Design',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="database" // AntDesign does not have a database-outline, so always use "database"
              color={color}
              family="AntDesign" // Specify AntDesign here
            />
          ),
        }}
      />
    </Tabs>
  );
}
