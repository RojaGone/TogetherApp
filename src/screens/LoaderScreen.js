import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, StatusBar, Image} from 'react-native';

const LoaderScreen = () => {
  return (
    <View style={styles.Container}>
      {/* <ActivityIndicator size="large" color={'white'} /> */}
      <StatusBar barStyle="dark-content" backgroundColor="#EFF1F4"/>
      <Image source={require('../assets/images/loading-gif.gif')} style={{height: 50, width: 50}}/>
      <Text style={styles.Logo}>Loading...</Text>
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
