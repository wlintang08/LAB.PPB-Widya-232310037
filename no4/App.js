import React from 'react';
import { View } from 'react-native';
// Pilih salah satu untuk ditampilkan
import BioRFC from './components/BioRFC';
// import BioRFC from './components/BioRFC';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <BioRFC />
      {/* <BioRFC /> */}
    </View>
  );
}
