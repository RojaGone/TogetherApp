import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const LoaderScreen = () => {
  return (
    <View style={styles.Container}>
      <ActivityIndicator size="large" color={'white'} />
      <Text style={styles.Logo}>Loading</Text>
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#EFF1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Lato',
  },
});
