import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import LottieView from "lottie-react-native";

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const handleAnimationComplete = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000000,
        useNativeDriver: true,
      }).start(() => onAnimationFinish());
    };

    handleAnimationComplete();
  }, [opacity, onAnimationFinish]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <LottieView
        source={require("../assets/animation/Study.json")}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        style={{
          width: "70%",
          height: "70%",
          marginLeft: -20
        }}
      />
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          paddingTop: 250,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "#0096FF",
          }}
        >
          Studypoint
        </Text>
      </View>
    </Animated.View>
  );
};

export default SplashScreen;
