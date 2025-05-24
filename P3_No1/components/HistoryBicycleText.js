import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryBicycleText = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>History of Bicycle</Text>
      <Text style={styles.paragraph}>
        A bicycle, also called pedal cycle, bike or cycle, is a human-powered or 
        motor-powered assisted, pedal-driven, single-track vehicle, having two wheels 
        attached to a frame, one behind the other.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    width: 300,
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#a33',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#333',
  },
});

export default HistoryBicycleText;
