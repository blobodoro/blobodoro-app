import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
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
