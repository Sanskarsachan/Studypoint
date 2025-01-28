import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface EarlyAccessProps {
  onSubmit: () => void;
}

const EarlyAccess = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Number:", number);
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ alignItems: "center", width: "80%" }}>
        <Image
          source={require("../assets/images/XikeLogo.png")}
          resizeMode="contain"
          style={{ height: undefined, aspectRatio: 3.5, marginBottom: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Be the first one to know!
        </Text>
        <Text
          style={{
            color: "#ccc",
            fontSize: 16,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          You might get a coupon when we launch
        </Text>
        <TextInput
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#333",
            color: "white",
            borderRadius: 8,
            marginBottom: 15,
          }}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#333",
            color: "white",
            borderRadius: 8,
            marginBottom: 15,
          }}
          placeholder="Enter your number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={number}
          onChangeText={setNumber}
        />
        <LinearGradient
          colors={["#B454FF", "#5E1299"]}
          start={{ x: 0.09, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            marginVertical: 15,
            borderRadius: 8,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 12,
              borderRadius: 8,
              width: "100%",
              alignItems: "center",
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EarlyAccess;
