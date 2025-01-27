import React from 'react';
import { View, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  return (
    <Onboarding
      onDone={onComplete}
      pages={[
        {
          backgroundColor: '#000000',
          image: (
            <View style={{ width: '100%', alignItems: 'center', marginTop: -60 }}>
              <Image
                source={require('../assets/images/XikeLogo.png')}
                resizeMode="contain"
                style={{ height: undefined, aspectRatio: 3.5, marginBottom: 10 }}
              />
              <LottieView
                source={require('../assets/animation/LocationAnimation.json')}
                autoPlay
                loop
                style={{ width: 500, height: 500 }}
              />
            </View>
          ),
          title: 'Discover epic deals in town',
          subtitle: 'Find exclusive offers across restaurants, salons, & shopping spots.',
        },
        {
          backgroundColor: '#000000',
          image: (
            <View style={{ width: '100%', alignItems: 'center', marginTop: -60 }}>
              <Image
                source={require('../assets/images/XikeLogo.png')}
                resizeMode="contain"
                style={{ height: undefined, aspectRatio: 3.5, marginBottom: 10 }}
              />
              <LottieView
                source={require('../assets/animation/LocationAnimation.json')}
                autoPlay
                loop
                style={{ width: 500, height: 500 }}
              />
            </View>
          ),
          title: 'Share with your crew',
          subtitle: '& Watch your wallet grow with every purchase',
        },
        {
          backgroundColor: '#000000',
          image: (
            <View style={{ width: '100%', alignItems: 'center', marginTop: -60 }}>
              <Image
                source={require('../assets/images/XikeLogo.png')}
                resizeMode="contain"
                style={{ height: undefined, aspectRatio: 3.5, marginBottom: 10 }}
              />
              <LottieView
                source={require('../assets/animation/LocationAnimation.json')}
                autoPlay
                loop
                style={{ width: 500, height: 500 }}
              />
            </View>
          ),
          title: 'Get Started Now',
          subtitle: 'Start exploring the app!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
