import { useFonts } from 'expo-font';
import { SplashScreen as ExpoSplashScreen, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from '@/components/SplashScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';

ExpoSplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)', // Start with the tabs screen
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);

  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [loaded]);

  const handleAnimationFinish = () => {
    setIsSplashAnimationFinished(true); // Mark splash screen as finished
  };

  if (!loaded || !isSplashAnimationFinished) {
    return <SplashScreen onAnimationFinish={handleAnimationFinish} />;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        {/* Main tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Add other screens here as needed */}
      </Stack>
    </SafeAreaProvider>
  );
}
