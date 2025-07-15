import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '232310037@ibik.ac.id' && password === '12345678') {
      await AsyncStorage.setItem('userName', 'Widya');
      navigation.replace('Home');
    } else {
      Alert.alert('Login Gagal', 'Email atau password salah');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/kantin-ibik.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>KANTIN IBIK</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#B0B0B0"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <View style={[styles.inputWrapper, { top: 549 }]}>
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    backgroundColor: '#C8A1E0',
    position: 'relative',
    alignSelf: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    position: 'absolute',
    left: 133,
    top: 259,
  },
  title: {
    width: 247,
    position: 'absolute',
    top: 418,
    left: 73,
    textAlign: 'center',
    color: '#F7EFE5',
    fontSize: 32,
    fontWeight: '800',
    fontFamily: 'Inter',
  },
  inputWrapper: {
    position: 'absolute',
    width: 330,
    height: 45,
    left: 32,
    top: 493,
    backgroundColor: '#F7EFE5',
    borderRadius: 30,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#000',
  },
  button: {
    position: 'absolute',
    width: 330,
    height: 45,
    left: 32,
    top: 654,
    backgroundColor: '#674188',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F7EFE5',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Inter',
  },
});
