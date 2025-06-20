// screens/FormPendaftaran.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');

  const handleSubmit = () => {
    if (!nama || !email || !nomorHP) {
      Alert.alert('Peringatan', 'Semua field harus diisi!');
    } else {
      Alert.alert(
        'Data Terkirim',
        `Nama: ${nama}\nEmail: ${email}\nNomor HP: ${nomorHP}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pendaftaran</Text>

      <TextInput
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Nomor HP"
        value={nomorHP}
        onChangeText={setNomorHP}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default FormPendaftaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  buttonContainer: {
    marginTop: 12,
  },
});
