import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl text-white">Home Page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
