import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import Onboarding from "react-native-onboarding-swiper";
import SectionDivider from "./SectionTile";
import { LinearGradient } from "expo-linear-gradient";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  return (
    <Onboarding
      onDone={onComplete}
      pages={[
        {
          backgroundColor: "#0096FF",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -150 }}
            >
              <LottieView
                source={require("../assets/animation/Onboarding1.json")}
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
              />
            </View>
          ),
          title: "Discover epic deals in town",
          subtitle:
            "Find exclusive offers across restaurants, salons, & shopping spots.",
        },
        {
          backgroundColor: "#0096FF",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -60 }}
            >
              <LottieView
                source={require("../assets/animation/Onboarding2.json")}
                autoPlay
                loop
                style={{ width: 300, height: 300, backgroundColor: "#000" }}
              />
            </View>
          ),
          title: "Share with your crew",
          subtitle: "& Watch your wallet grow with every purchase",
        },
        {
          backgroundColor: "#0096FF",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -50 }}
            >
              <LottieView
                source={require("../assets/animation/Onboarding3.json")}
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
              />
                {/* <TouchableOpacity
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 12,
                    borderRadius: 8,
                    backgroundColor: "#FFF",
                    marginTop: 100
                  }}
                >
                  <Text
                    style={{ color: "#0096FF", fontSize: 18, fontWeight: "bold" }}
                  >
                    Sign Up Now
                  </Text>
                </TouchableOpacity> */}
            </View>
          ),
          title: "Get new recommendations",
          subtitle: "Sign up now, and you might just get a surprise gift when we launch!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
