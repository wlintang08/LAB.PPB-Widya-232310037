import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const makanan = [
  { id: 1, nama: 'Nasi Goreng', harga: 15000 },
  { id: 2, nama: 'Mie Ayam', harga: 13000 },
  { id: 3, nama: 'Soto Ayam', harga: 14000 },
  { id: 4, nama: 'Bakso', harga: 12000 },
  { id: 5, nama: 'Ayam Geprek', harga: 16000 },
  { id: 6, nama: 'Nasi Uduk', harga: 10000 },
];

const minuman = [
  { id: 7, nama: 'Es Teh', harga: 5000 },
  { id: 8, nama: 'Es Jeruk', harga: 6000 },
  { id: 9, nama: 'Kopi Hitam', harga: 7000 },
  { id: 10, nama: 'Teh Hangat', harga: 4000 },
  { id: 11, nama: 'Air Mineral', harga: 3000 },
];

export default function HomeScreen({ navigation }) {
  const [namaUser, setNamaUser] = useState('');

  useEffect(() => {
    const ambilNama = async () => {
      const nama = await AsyncStorage.getItem('userName');
      setNamaUser(nama);
    };
    ambilNama();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Login'); // Pastikan 'Login' sesuai dengan nama screen-mu
  };

  const handleBeli = (item) => {
    Alert.alert(
      'Konfirmasi Pembelian',
      `Beli ${item.nama} seharga Rp${item.harga}?`,
      [
        { text: 'Batal' },
        {
          text: 'Beli',
          onPress: () => {
            navigation.navigate('Checkout', { pesanan: item });
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sambutan}>Selamat Datang, {namaUser}!</Text>

      <Text style={styles.section}>🍽️ Makanan</Text>
      {makanan.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.nama}>{item.nama}</Text>
          <Text style={styles.harga}>Rp{item.harga}</Text>

          <TouchableOpacity style={styles.button} onPress={() => handleBeli(item)}>
            <Text style={styles.buttonText}>Beli</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.detailButton]}
            onPress={() => navigation.navigate('ProdukDetail', { produk: item })}
          >
            <Text style={styles.buttonText}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.section}>🥤 Minuman</Text>
      {minuman.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.nama}>{item.nama}</Text>
          <Text style={styles.harga}>Rp{item.harga}</Text>

          <TouchableOpacity style={styles.button} onPress={() => handleBeli(item)}>
            <Text style={styles.buttonText}>Beli</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.detailButton]}
            onPress={() => navigation.navigate('ProdukDetail', { produk: item })}
          >
            <Text style={styles.buttonText}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A1E0',
    padding: 20,
  },
  logoutWrapper: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  sambutan: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#F7EFE5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  nama: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  harga: {
    fontSize: 15,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#674188',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  detailButton: {
    backgroundColor: '#674188',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
