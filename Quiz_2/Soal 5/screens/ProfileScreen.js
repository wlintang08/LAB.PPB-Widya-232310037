import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.png')}
        style={styles.image}
      />
      <Text style={styles.name}>Nama: Widya Lintang</Text>
      <Text style={styles.email}>Email: widya@example.com</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
