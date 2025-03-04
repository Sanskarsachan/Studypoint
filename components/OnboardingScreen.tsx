import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import LottieView from "lottie-react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Redirect } from "expo-router";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  animationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.4,
  },
  animation: {
    width: width * 0.8,
    height: width * 0.8,
    maxWidth: 300,
    maxHeight: 300,
  },
  lastAnimation: {
    backgroundColor: "#0096FF",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
    marginTop: -100,
  },
  button: {
    backgroundColor: '#FFF',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#0096FF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [isLastPage, setIsLastPage] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleNavigate = () => {
    onComplete();
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={onComplete}
        showSkip={false}
        showNext={false}
        showDone={false}
        bottomBarHighlight={false}
        containerStyles={{
          paddingHorizontal: 20,
        }}
        titleStyles={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFF",
        }}
        subTitleStyles={{
          fontSize: 16,
          color: "rgba(255, 255, 255, 0.8)",
        }}
        pageIndexCallback={(index) => {
          setIsLastPage(index === 2);
        }}
        pages={[
          {
            backgroundColor: "#0096FF",
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require("../assets/animation/Onboarding1.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </View>
            ),
            title: "Discover epic deals in town",
            subtitle: "Find exclusive offers across restaurants, salons, & shopping spots.",
          },
          {
            backgroundColor: "#0096FF",
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require("../assets/animation/Onboarding2.json")}
                  autoPlay
                  loop
                  style={[styles.animation, styles.lastAnimation]}
                />
              </View>
            ),
            title: "Share with your crew",
            subtitle: "& Watch your wallet grow with every purchase",
          },
          {
            backgroundColor: "#0096FF",
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require("../assets/animation/Onboarding3.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </View>
            ),
            title: "Get new recommendations",
            subtitle: "Sign up now, and you might just get a surprise gift when we launch!",
          },
        ]}
      />
      {isLastPage && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNavigate}>
            <Text style={styles.buttonText}>Let's Go!</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(OnboardingScreen);
