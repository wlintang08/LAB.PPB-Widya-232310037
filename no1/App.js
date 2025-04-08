import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryBicycleText from './components/HistoryBicycleText';
import HistoryBicycleImage from './components/HistoryBicycleImage';

// React Class Component sebagai root aplikasi
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryBicycleText />
        <HistoryBicycleImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
