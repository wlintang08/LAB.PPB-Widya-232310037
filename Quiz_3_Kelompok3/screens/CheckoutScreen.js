import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { pesanan } = route.params;
  const [status, setStatus] = useState('Pesanan sedang diproses...');

  const konfirmasiPesanan = () => {
    Alert.alert('Pembayaran Cash', `Pesanan ${pesanan.nama} diterima!`);
    setStatus('Pesanan akan segera jadi');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pesanan Anda</Text>
        <Text style={styles.item}>{pesanan.nama}</Text>
        <Text style={styles.harga}>Rp{pesanan.harga}</Text>
        <Text style={styles.status}>{status}</Text>

        <TouchableOpacity style={styles.button} onPress={konfirmasiPesanan}>
          <Text style={styles.buttonText}>Bayar Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={styles.back}>← Kembali ke Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A1E0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#F7EFE5',
    borderRadius: 16,
    padding: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 4,
  },
  harga: {
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#674188',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#F7EFE5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  back: {
    fontSize: 16,
    color: '#006CAC',
    textDecorationLine: 'underline',
  },
});
