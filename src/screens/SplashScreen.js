import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TimeoutComponent = () => {
  const nav = useNavigation();
  setTimeout(() => {
    nav.navigate('LoginScreen');
  }, 6000);
  
};
const LoaderScreen = () => {
  return (
    <View style={styles.Container}>
    <StatusBar barStyle="#3949AB" backgroundColor="#3949AB" />
      <Text style={styles.Logo}>Together</Text>
      <TimeoutComponent/>
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
