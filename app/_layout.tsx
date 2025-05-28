import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      {/* Add other screens here if needed, e.g.: */}
      {/* <Stack.Screen name="profile" options={{ title: 'Profile' }} /> */}
    </Stack>
  );
}