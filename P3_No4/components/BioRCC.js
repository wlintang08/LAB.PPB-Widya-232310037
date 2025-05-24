// components/BioRCC.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BioRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyBio: {
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
        mobile_phone: "812345679", // ✅ Diperbaiki jadi string
        email: "212310056@student.ibik.ac.id",
        gender: 'M',
        tall_body: 175,
        weight_body: 64.5
      }
    };
  }

  render() {
    const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = this.state.MyBio;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Biodata (RCC)</Text>
        <Text>NPM: {identity.npm}</Text>
        <Text>Nama: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
        <Text>No HP: {mobile_phone}</Text>
        <Text>Email: {email}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Tinggi Badan: {tall_body} cm</Text>
        <Text>Berat Badan: {weight_body} kg</Text>
        <Text style={styles.subtitle}>Riwayat Pendidikan:</Text>
        {educations.map((edu) => (
          <Text key={edu.id}>- {edu.school}</Text>
        ))}
      </View>
    );
  }
}

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
