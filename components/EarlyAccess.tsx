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

// Define the type for EarlyAccess props to accept onSubmit function
interface EarlyAccessProps {
  onSubmit: () => void;
}

const EarlyAccess: React.FC<EarlyAccessProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Number:", number);
    onSubmit();  // Call onSubmit when the form is submitted
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ alignItems: "center", width: "80%" }}>
        <Image
          source={require("../assets/images/StudypointIcon.png")}
          resizeMode="contain"
          style={{ height: undefined, aspectRatio: 4, marginBottom: 10 }}
        />
        <Text
          style={{
            color: "#0096FF",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Be the first one to know!
        </Text>
        <Text
          style={{
            color: "#0096FF",
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
            backgroundColor: "#E5E4E2",
            color: "#0096FF",
            borderRadius: 8,
            marginBottom: 15,
          }}
          placeholder="Enter your name"
          placeholderTextColor="#0096FF"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#E5E4E2",
            color: "#0096FF",
            borderRadius: 8,
            marginBottom: 15,
          }}
          placeholder="Enter your number"
          placeholderTextColor="#0096FF"
          keyboardType="phone-pad"
          value={number}
          onChangeText={setNumber}
        />
        <LinearGradient
          colors={["#0096FF", "#87CEEB", "#0096FF"]}
          start={{ x: 0.1, y: 1 }}
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
            onPress={handleSubmit}  // Use the handleSubmit function
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
