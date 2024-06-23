import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].text,
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: {
          position: "absolute",
          color: "black",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: "center",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 70,
          right: 70,
          borderRadius: 12,
          height: 55,
          backgroundColor: "#f5f5f5",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => (
            <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
              <Text
                style={[styles.tabLabel, focused && styles.tabLabelFocused]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="ciel"
        options={{
          title: "Ciel",
          tabBarLabel: ({ color, focused }) => (
            <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
              <Text
                style={[styles.tabLabel, focused && styles.tabLabelFocused]}
              >
                Ciel
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="espace"
        options={{
          title: "Espace",
          tabBarLabel: ({ color, focused }) => (
            <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
              <Text
                style={[styles.tabLabel, focused && styles.tabLabelFocused]}
              >
                Espace
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 50, // Adjusted for narrower width
    right: 50, // Adjusted for narrower width
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: "#000",
    height: 60,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemFocused: {
    backgroundColor: "#fff", // Change this to the desired background color for the focused tab

    borderRadius: 6, // Adjust the radius if needed
    width: 66,
    margin: 10,
    padding: 5,
  },
  tabLabel: {
    fontSize: 14,
    color: Colors.light.text, // Change this to the desired text color
  },
  tabLabelFocused: {
    color: "#000", // Change this to the desired text color for focused tabs
  },
});
