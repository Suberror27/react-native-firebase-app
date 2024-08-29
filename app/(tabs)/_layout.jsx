import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from "../../constants";

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6"/>
      <Text className={`${focused ? "font-semibold" : "font-pregular"} text-xs`} style={{color: color}}>{name}</Text>
    </View>
  )
}

export default function TabsLayout(){
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarStyle: {
          backgroundColor: "#6b7280",
          borderTopWidth: 0,
          borderTopColor: "#6b7280",
          height: 60
        }
      }}>
        <Tabs.Screen name="pageOne" options={{
          title: "Page One",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon icon={icons.home} color={color} name="Page One" focused={focused}/>
          )
        }}/>
        <Tabs.Screen name="pageTwo" options={{
          title: "Page Two",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon icon={icons.home} color={color} name="Page Two" focused={focused}/>
          )
        }}/>
        <Tabs.Screen name="pageThree" options={{
          title: "Page Three",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon icon={icons.home} color={color} name="Page Three" focused={focused}/>
          )
        }}/>
        <Tabs.Screen name="pageFour" options={{
          title: "Page Four",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon icon={icons.home} color={color} name="Page Four" focused={focused}/>
          )
        }}/>
      </Tabs>
    </>
  )
}
