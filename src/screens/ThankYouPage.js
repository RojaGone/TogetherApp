import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const ThankYouPage = () => {
  const nav = useNavigation();

  // const NextBtn = () => {
  //   nav.navigate('SeatingArrangementPage2');
  // };
  const TimeoutComponent = () => {
    const nav = useNavigation();
    setTimeout(() => {
      nav.navigate('SeatingArrangementPage2');
    }, 2000);
  };

  return (
    <View style={styles.Container}>
      {/* <Text style={styles.Btn} onPress={NextBtn}>
        Next
      </Text> */}
      <Icon
          name="checkcircle"
          size={100}
          color="#3949AB"
          style={styles.iconStyle}
          
        />
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, marginTop: 10}}>Thank you</Text>
        <Text style={{color: 'black', fontSize: 25, marginTop: 10}}>Castusinfo</Text>
        <Text style={{color: 'gray',marginTop: 20, fontSize: 15 }}>You have successfully Uploaded Layout</Text>
        <TimeoutComponent/>
    </View>
  );
};

export default ThankYouPage;

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
  iconStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 10,
    marginTop: 10,
  },
});
