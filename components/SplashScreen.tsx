import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import LottieView from 'lottie-react-native';

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const handleAnimationComplete = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 10000000,
        useNativeDriver: true,
      }).start(() => onAnimationFinish());
    };

    handleAnimationComplete();

  }, [opacity, onAnimationFinish]);

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', opacity }}>
      <LottieView
        source={require('../assets/animation/StartingAnimation.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        style={{ flex: 1, width: '100%', height: '100%' }}
      />
    </Animated.View>
  );
};

export default SplashScreen;
