import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Make sure Lottie is installed

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Function to handle animation complete event
    const handleAnimationComplete = () => {
      // Fade out animation after Lottie completes
      Animated.timing(opacity, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => onAnimationFinish()); // Call the onAnimationFinish prop once fade-out is done
    };

    return () => {
      // Cleanup if necessary
    };
  }, [opacity, onAnimationFinish]);

    function handleAnimationComplete(isCancelled: boolean): void {
        console.log("Animation Finished");
    }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <LottieView
        source={require('../assets/animation/StartingAnimation.json')}
        autoPlay
        loop={false} // Play the animation once
        onAnimationFinish={handleAnimationComplete} // Call the finish handler when done
        style={styles.lottie}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the animation
    backgroundColor: '#000', // Ensure background is black
  },
  lottie: {
    flex: 1, // Make the Lottie animation take up the full screen
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
