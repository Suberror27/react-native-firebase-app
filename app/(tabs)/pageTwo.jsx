import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageTwo(){
  return (
    <SafeAreaView className="h-full w-full bg-gray-500">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-white">Page Two</Text>
      </View>
    </SafeAreaView>
  )
}
