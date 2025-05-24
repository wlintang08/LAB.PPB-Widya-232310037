// App.js
import React from 'react';
import { View } from 'react-native';

// Import komponen SplashScreen dari folder components
import SplashScreen from './components/SplashScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SplashScreen />
    </View>
  );
}
