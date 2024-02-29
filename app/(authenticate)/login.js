import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useRouter } from "expo-router";

const login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
        <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Food App
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})