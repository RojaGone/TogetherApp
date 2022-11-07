import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const nav = useNavigation();

  const CreateEventBtn = () => {
    nav.navigate('EventInformationPage');
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Btn} onPress={CreateEventBtn}>
        Create Event
      </Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato',
    width: '60%',
    height: '6%',
    backgroundColor: '#3949AB',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
