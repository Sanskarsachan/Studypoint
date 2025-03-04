import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  Text,
  Dimensions,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import LottieView from "lottie-react-native";

type SplashScreenProps = {
  onAnimationFinish: () => void;
  /** Duration for fade out animation in milliseconds */
  fadeOutDuration?: number;
  /** Custom styles for the container */
  containerStyle?: StyleProp<ViewStyle>;
  /** Custom styles for the title text */
  titleStyle?: StyleProp<TextStyle>;
};

// Get device dimensions for responsive layout using a custom hook
const useWindowDimensions = () => {
  const [dimensions, setDimensions] = React.useState(() =>
    Dimensions.get("window")
  );

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });

    return () => subscription.remove();
  }, []);

  return dimensions;
};

// Memoized styles creator
const createStyles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    animation: {
      width: Math.min(width * 0.7, 400),
      height: Math.min(height * 0.7, 400),
      alignSelf: "center",
      marginLeft: -30,
    },
    titleContainer: {
      position: "absolute",
      alignItems: "center",
      paddingTop: height * 0.3,
    },
    title: {
      fontSize: Math.min(width * 0.085, 35),
      fontWeight: "bold",
      color: "#0096FF",
    },
  });

/**
 * SplashScreen Component
 * Displays an animated splash screen with a Lottie animation and title
 */
const SplashScreen = React.memo(
  ({
    onAnimationFinish,
    fadeOutDuration = 1000,
    containerStyle,
    titleStyle,
  }: SplashScreenProps) => {
    // Refs
    const opacity = useRef(new Animated.Value(1)).current;
    const animationRef = useRef<LottieView>(null);

    // Get responsive dimensions
    const { width, height } = useWindowDimensions();

    // Memoized styles
    const styles = React.useMemo(
      () => createStyles(width, height),
      [width, height]
    );

    // Stable callback using useCallback
    const handleAnimationComplete = React.useCallback(() => {
      console.log("[SplashScreen] Animation complete, starting fade out");
      Animated.timing(opacity, {
        toValue: 0,
        duration: fadeOutDuration,
        useNativeDriver: true,
      }).start(() => {
        console.log("[SplashScreen] Fade out complete");
        onAnimationFinish();
      });
    }, [opacity, onAnimationFinish, fadeOutDuration]);

    // Lifecycle logging
    useEffect(() => {
      const message = "[SplashScreen] Component mounted";
      console.log(message);
      return () => console.log("[SplashScreen] Component unmounted");
    }, []);

    return (
      <Animated.View style={[styles.container, { opacity }, containerStyle]}>
        <LottieView
          ref={animationRef}
          source={require("../assets/animation/Study.json")}
          autoPlay
          loop={false}
          onAnimationFinish={handleAnimationComplete}
          style={styles.animation}
        />

        <View style={styles.titleContainer}>
          <Text style={[styles.title, titleStyle]}>Studypoint</Text>
        </View>
      </Animated.View>
    );
  }
);

// Display name for debugging
SplashScreen.displayName = "SplashScreen";

export default SplashScreen;
