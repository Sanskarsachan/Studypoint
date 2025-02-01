import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen as ExpoSplashScreen } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SplashScreen from '@/components/SplashScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import EarlyAccess from '@/components/EarlyAccess';
import ThankYou from '@/components/ThankYou';

export const unstable_settings = {
  initialRouteName: '(tabs)', // Adjust this if necessary for initial routing
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // States to track the flow
  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSubmittedEarlyAccess, setIsSubmittedEarlyAccess] = useState(false);

  useEffect(() => {
    // Prevent SplashScreen from auto-hiding until it's finished
    if (loaded) {
      ExpoSplashScreen.preventAutoHideAsync();
    }
  }, [loaded]);

  // Handle SplashScreen animation completion
  const handleSplashAnimationFinish = () => {
    setIsSplashAnimationFinished(true);
  };

  // Handle Onboarding completion
  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  // Handle user login submission (For testing, simulate login)
  const handleLoginSubmit = () => {
    setIsUserLoggedIn(true);
  };

  // Handle EarlyAccess form submission
  const handleEarlyAccessSubmit = () => {
    setIsSubmittedEarlyAccess(true);
  };

  // SplashScreen Phase
  if (!isSplashAnimationFinished) {
    return <SplashScreen onAnimationFinish={handleSplashAnimationFinish} />;
  }

  // Onboarding Phase
  if (!isOnboardingComplete) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  // Early Access Phase (user is not logged in yet)
  if (!isUserLoggedIn) {
    return <EarlyAccess onSubmit={handleLoginSubmit} />;
  }

  // Thank You Phase (user has submitted early access)
  if (!isSubmittedEarlyAccess) {
    return <ThankYou onSubmit={handleEarlyAccessSubmit} />;
  }

  // After all phases, render main app
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
