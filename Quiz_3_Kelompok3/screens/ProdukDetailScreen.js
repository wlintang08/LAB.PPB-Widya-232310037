import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProdukDetailScreen({ route, navigation }) {
  const { produk } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{produk.nama}</Text>
        <Text style={styles.harga}>Harga: Rp{produk.harga}</Text>
        <Text style={styles.desc}>
          Deskripsi: Lezat dan bergizi. Cocok untuk mahasiswa IBIK ✨
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Checkout', { pesanan: produk })}
        >
          <Text style={styles.buttonText}>Beli Sekarang</Text>
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
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#F7EFE5',
    borderRadius: 16,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  harga: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#674188',
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#F7EFE5',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
