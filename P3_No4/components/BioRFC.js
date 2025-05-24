// components/BioRFC.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BioRFC = () => {
  const [myBio, setMyBio] = useState({
    identity: {
      npm: 212310056,
      firstname: "MUHAMMAD",
      middlename: "ZIDAN",
      lastname: "AKBAR",
    },
    educations: [
      { id: 1, school: "SDN 1 Kota Bogor" },
      { id: 2, school: "SMPN 1 Kota Bogor" },
      { id: 3, school: "SMAN 1 Kota Bogor" },
    ],
    mobile_phone: "0812345679", // ✅ string supaya tidak error
    email: "212310056@student.ibik.ac.id",
    gender: 'M',
    tall_body: 175,
    weight_body: 64.5
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata (RFC)</Text>
      <Text>NPM: {myBio.identity.npm}</Text>
      <Text>Nama: {myBio.identity.firstname} {myBio.identity.middlename} {myBio.identity.lastname}</Text>
      <Text>No HP: {myBio.mobile_phone}</Text>
      <Text>Email: {myBio.email}</Text>
      <Text>Gender: {myBio.gender}</Text>
      <Text>Tinggi Badan: {myBio.tall_body} cm</Text>
      <Text>Berat Badan: {myBio.weight_body} kg</Text>
      <Text style={styles.subtitle}>Riwayat Pendidikan:</Text>
      {myBio.educations.map((edu) => (
        <Text key={edu.id}>- {edu.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 10,
    fontWeight: 'bold',
  }
});

export default BioRFC;
