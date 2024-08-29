import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className="h-full w-full bg-gray-500">
      <View className="flex-1 items-center">
        <Text className="text-3xl text-black pt-3 text-center">Welcome to React Native FireBase App</Text>
        <Text className="text-2xl text-black pt-10 text-center">This app is created simply to test functionality with react native and FireBase</Text>
        <StatusBar style="auto" />
        <Link href="/pageOne" className="text-2xl mt-5 bg-[#FFA001] border-[2px] border-l-black rounded-xl w-20 text-center">Start</Link>
      </View>
    </SafeAreaView>
  );
}
