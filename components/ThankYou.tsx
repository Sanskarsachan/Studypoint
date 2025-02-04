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

// Define the type for ThankYou props to accept onSubmit function
interface ThankYouProps {
  onSubmit: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Number:", number);
    onSubmit(); // Call onSubmit when the form is submitted
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -20,
      }}
    >
      <Image
        source={require("../assets/images/StudypointIcon.png")}
        resizeMode="contain"
        style={{ height: undefined, aspectRatio: 6, marginBottom: 100 }}
      />
      <Image
        source={require("../assets/images/Text.png")}
        resizeMode="contain"
        style={{ height: undefined, aspectRatio: 13, marginBottom: 100 }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Thank you and Stay tuned
      </Text>
      <Text
        style={{
          color: "#ccc",
          fontSize: 16,
          marginBottom: 150,
          textAlign: "center",
        }}
      >
        something exciting is coming your way!
      </Text>
      <Text
        style={{
          color: "#ccc",
          fontSize: 16,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Follow us on Instagram for sneak peeks and exciting updates!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF",
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 8,
          alignItems: "center",
          flexDirection: "row", // Aligns children horizontally
          justifyContent: "center", // Centers content within the TouchableOpacity
        }}
        onPress={handleSubmit}
      >
        <Image
          source={require("../assets/images/InstagramIcon.png")}
          resizeMode="contain"
          style={{ height: 35, width: 35, marginRight: 10 }} // Add marginRight to create space between image and text
        />
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYou;
