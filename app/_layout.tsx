import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen as ExpoSplashScreen } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SplashScreen from '@/components/SplashScreen';
import OnboardingScreen from '@/components/OnboardingScreen';

export const unstable_settings = {
  initialRouteName: '(tabs)', // Start with the tabs screen
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.preventAutoHideAsync();
    }
  }, [loaded]);

  const handleSplashAnimationFinish = () => {
    setIsSplashAnimationFinished(true); // Trigger the splash to finish
  };

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true); // Trigger the onboarding completion
  };

  // Splash screen is shown if not finished, then onboarding, and then the root layout
  if (!isSplashAnimationFinished) {
    return <SplashScreen onAnimationFinish={handleSplashAnimationFinish} />;
  }

  if (!isOnboardingComplete) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
