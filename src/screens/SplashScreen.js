import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

const LoaderScreen = () => {
  return (
    <View style={styles.Container}>
 
      <Text style={styles.Logo}>Together</Text>
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#3949AB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Lato',
  },
});
