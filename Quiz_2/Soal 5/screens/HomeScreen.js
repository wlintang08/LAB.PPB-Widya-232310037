import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Home Screen</Text>
      <Button title="Lihat Profil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FAFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
