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
          backgroundColor: "#000000",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -60 }}
            >
              <Image
                source={require("../assets/images/XikeLogo.png")}
                resizeMode="contain"
                style={{
                  height: undefined,
                  aspectRatio: 3.5,
                  marginBottom: 10,
                }}
              />
              <LottieView
                source={require("../assets/animation/LocationAnimation.json")}
                autoPlay
                loop
                style={{ width: 500, height: 500 }}
              />
            </View>
          ),
          title: "Discover epic deals in town",
          subtitle:
            "Find exclusive offers across restaurants, salons, & shopping spots.",
        },
        {
          backgroundColor: "#000000",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -60 }}
            >
              <Image
                source={require("../assets/images/XikeLogo.png")}
                resizeMode="contain"
                style={{
                  height: undefined,
                  aspectRatio: 3.5,
                  marginBottom: 10,
                }}
              />
              <LottieView
                source={require("../assets/animation/Test3.json")}
                autoPlay
                loop
                style={{ width: 500, height: 500 }}
              />
            </View>
          ),
          title: "Share with your crew",
          subtitle: "& Watch your wallet grow with every purchase",
        },
        {
          backgroundColor: "#000000",
          image: (
            <View
              style={{ width: "100%", alignItems: "center", marginTop: -150 }}
            >
              <Image
                source={require("../assets/images/XikeLogo.png")}
                resizeMode="contain"
                style={{
                  height: undefined,
                  aspectRatio: 3.5,
                  marginBottom: 20,
                }}
              />
              <Image
                source={require("../assets/images/HotDeals.png")}
                resizeMode="contain"
                style={{ height: undefined, aspectRatio: 7, marginBottom: 20 }}
              />
              <SectionDivider title={"COMING SOON"} />
              <LinearGradient
                colors={["#B454FF", "#5E1299"]} // Linear gradient colors
                start={{ x: 0.09, y: 0 }} // Start of gradient (adjust as needed)
                end={{ x: 0.92, y: 1 }} // End of gradient (adjust as needed)
                style={{
                  margin: 12,
                  borderRadius: 8,
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 12,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    Sign Up Now
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ),
          title: "",
          subtitle: "Sign up now, and you might just get a surprise gift when we launch!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
