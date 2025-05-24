// SplashScreen.js - React Class Component
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#800080', // Warna ungu
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Logo IBIK */}
        <Image
          source={require('../assets/logoibik.png')} // Relative path yang benar
          style={{ width: 120, height: 120, resizeMode: 'contain', marginBottom: 30 }}
        />

        {/* Teks Loading */}
        <Text style={{ position: 'absolute', bottom: 40, color: 'white' }}>
          Loading...
        </Text>
      </View>
    );
  }
}
