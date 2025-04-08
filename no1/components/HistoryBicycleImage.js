import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HistoryBicycleImage = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/706/706830.png' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#b2ebf2',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
});

export default HistoryBicycleImage;
