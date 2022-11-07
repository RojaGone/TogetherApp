import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Feather';

const SeatingArrangementPage2 = () => {
  const nav = useNavigation();

  const NextBtn = () => {
    nav.navigate('ConfirmationPage');
  };

  return (
    <View style={styles.Container}>
      <Card
        style={{
          width: '90%',
          height: 120,
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/images/cricket_tournament.jpg')}
          style={styles.imgStyl}
        />
      </Card>
      <Card
        style={{
          width: '90%',
          height: 120,
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray'
        }}>
        
        <Text style={{color: 'gray', alignSelf: 'center', marginTop: 20}}>
              Upload Custom Layout
            </Text>
            <Icon
              name="upload"
              size={25}
              color="#121110"
              style={styles.iconStyle}
              // onPress={UploadBtnComponent}
            />
      </Card>
      <Card
        style={{
          width: '90%',
          height: 120,
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/images/cricket_championship.jpg')}
          style={styles.imgStyl}
        />
      </Card>
      <Card
        style={{
          width: '90%',
          height: 120,
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray'
        }}>
        
        <Text style={{color: 'gray', alignSelf: 'center', marginTop: 20}}>
              Upload Custom Layout
            </Text>
            <Icon
              name="upload"
              size={25}
              color="#121110"
              style={styles.iconStyle}
              // onPress={UploadBtnComponent}
            />
      </Card>
      <Text style={styles.Btn} onPress={NextBtn}>
        Next
      </Text>
    </View>
  );
};

export default SeatingArrangementPage2;

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
    width: '90%',
    height: '6%',
    backgroundColor: '#3949AB',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 140,
  },
  imgStyl: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
