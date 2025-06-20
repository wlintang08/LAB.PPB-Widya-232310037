// screens/ListMahasiswa.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Ayu Lestari', npm: '211001001' },
    { id: '2', nama: 'Budi Santoso', npm: '211001002' },
    { id: '3', nama: 'Citra Permata', npm: '211001003' },
    { id: '4', nama: 'Dani Ramadhan', npm: '211001004' },
    { id: '5', nama: 'Eka Putra', npm: '211001005' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListMahasiswa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  nama: {
    fontSize: 18,
    fontWeight: '600',
  },
  npm: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
