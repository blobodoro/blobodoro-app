import React from "react";
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#000'} />
    </Pressable>
  );
};

const TabsLayout = () => {

  const { isSignedIn } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen
        name="stats"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fishtank"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
          headerRight: () => isSignedIn ? <LogoutButton /> : null,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-basket" size={size} color={color} />
          ),
          
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
