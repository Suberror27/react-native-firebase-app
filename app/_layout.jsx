//This page will be present on all pages (Good for Navbar)
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
    </>
)
}

