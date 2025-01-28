import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen as ExpoSplashScreen } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SplashScreen from '@/components/SplashScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import EarlyAccess from '@/components/EarlyAccess';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.preventAutoHideAsync();
    }
  }, [loaded]);

  const handleSplashAnimationFinish = () => {
    setIsSplashAnimationFinished(true);
  };

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  const handleLoginSubmit = () => {
    setIsUserLoggedIn(true);
  };

  if (!isSplashAnimationFinished) {
    return <SplashScreen onAnimationFinish={handleSplashAnimationFinish} />;
  }

  if (!isOnboardingComplete) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (!isUserLoggedIn) {
    return <EarlyAccess />;
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
