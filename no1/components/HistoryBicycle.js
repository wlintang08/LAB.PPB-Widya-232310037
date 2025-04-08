import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Komponen utama yang menampilkan informasi sejarah sepeda
const HistoryBicycle = () => {
  return (
    <View style={styles.container}>
      {/* Kartu teks berisi judul dan paragraf */}
      <View style={styles.card}>
        <Text style={styles.header}>History of Bicycle</Text>

        {/* Paragraf penjelasan tentang sepeda */}
        <Text style={styles.paragraph}>
          A bicycle, also called pedal cycle, bike or cycle, is a human-powered or 
          motor-powered assisted, pedal-driven, single-track vehicle, having two wheels 
          attached to a frame, one behind the other.
        </Text>
      </View>

      {/* Gambar profil di bawah kartu teks */}
      <View style={styles.profileWrapper}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/706/706830.png' }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

// Objek styles menggunakan StyleSheet.create untuk styling komponen
const styles = StyleSheet.create({
  // Container utama di tengah layar
  container: {
    alignItems: 'center',        // Horizontal center
    justifyContent: 'center',    // Vertical center
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,                // Bayangan di Android
    shadowColor: '#000',         // Bayangan di iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  // Kartu teks
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    width: 300,
    borderRadius: 5,
  },

  // Header merah dengan teks putih
  header: {
    backgroundColor: '#a33',     // Warna merah gelap
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 3,
  },

  // Teks paragraf
  paragraph: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#333',
  },

  // Kotak latar belakang biru untuk gambar profil
  profileWrapper: {
    backgroundColor: '#b2ebf2',
    padding: 10,
    borderRadius: 10,
  },

  // Gambar profil
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
});

export default HistoryBicycle;
