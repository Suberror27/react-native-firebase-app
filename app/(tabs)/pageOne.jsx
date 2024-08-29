import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from '../../components/CustomButton';
import { doc, setDoc } from 'firebase/firestore';
import {db} from "../../components/config";

export default function PageOne(){
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  function handleNameChange(text) {
    setUserName(text);
  }

  function handleIdChange(text) {
    setUserId(text);
  }


  function handleSubmit(){
    //Submit Data
    // console.log(userName);
    // console.log(userId);
    setDoc(doc(db, "users", `${userId}`), {
      name: userName,
      user_id: userId
    }).then(() => {
      Alert.alert("Success", "Data was submitted succesfully");
    }).catch((error) => {
      console.error("Error writing document: ", error);
    })
  }

  return (
    <SafeAreaView className="h-full w-full bg-gray-500">
      <View className="flex-1 items-center">
        <Text className="text-xl text-white">Page One</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-white mb-5">Firebase CRUD!</Text>
        <TextInput value={userName} onChangeText={handleNameChange} placeholder="UserName" className="text-xl p-3 border border-gray-950 rounded-xl w-4/5 mb-3"></TextInput>
        <TextInput value={userId} onChangeText={handleIdChange} placeholder="userId" className="text-xl p-3 border border-gray-950 rounded-xl w-4/5"></TextInput>
        <CustomButton
            title="Submit"
            handlePress={handleSubmit}
            containerStyles="mt-7 bg-[#FFA001] w-3/5 border-[2px] border-black"
          />
      </View>
    </SafeAreaView>
  )
}
