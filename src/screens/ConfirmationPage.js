import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-shadow-cards';

const ConfirmationPage = () => {
  const nav = useNavigation();

  const NextBtn = () => {
    // nav.navigate('');
  };

  return (
    <View style={styles.Container}>
      <Icon
        name="checkcircle"
        size={80}
        color="#3949AB"
        style={styles.iconStyle}
      />
      <Text
        style={{color: 'black', fontSize: 17, marginRight: 50, marginLeft: 50, marginTop: 15,}}>
        Congratulations, your event is created Successfully
      </Text>
      <Card
        style={{
          width: '90%',
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#c2c0c0',
        }}>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
          <Text style={styles.firstNameStyl}>Name:</Text>
          <Text style={styles.lastNameStyl}>Castusinfo</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.firstNameStyl}>Date:</Text>
          <Text style={styles.lastNameStyl}>10 May 2022</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.firstNameStyl}>Total Boxes:</Text>
          <Text style={styles.lastNameStyl}>16</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.firstNameStyl}>Seats Per Box:</Text>
          <Text style={styles.lastNameStyl}>10</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={styles.firstNameStyl}>Event URL:</Text>
          <Text style={styles.lastNameStyl}>https://2gethers.com</Text>
        </View>
      </Card>
      <Text style={{color: 'black', alignSelf: 'flex-start', marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15}}>Share</Text>
      <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginStart: 20, marginTop: 10}}>
      <Image
          source={require('../assets/images/facebook_logo1.png')}
          style={{height: 40, width: 40}}
        />
        <Image
          source={require('../assets/images/Twitter_logo.png')}
          style={{height: 40, width: 40, marginStart: 15}}
        />
        <Image
          source={require('../assets/images/Instagram_logo.png')}
          style={{height: 45, width: 45, marginStart: 15}}
        />
        <Image
          source={require('../assets/images/linkdin_logo.png')}
          style={{height: 40, width: 40, marginStart: 15}}
        />
      </View>
      <Card
        style={{
          width: '90%',
          height: 180,
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/images/ipl.png')}
          style={styles.imgStyl}
        />
      </Card>
      <Text style={styles.Btn} onPress={NextBtn}>
        GO TO EVENTLIST
      </Text>
    </View>
  );
};

export default ConfirmationPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Lato',
    width: '90%',
    height: '6%',
    backgroundColor: '#3949AB',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 30
  },
  iconStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 10,
    marginTop: 10,
  },
  Container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  firstNameStyl: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    minWidth: '40%',
    textAlign: 'right',
  },
  lastNameStyl: {
    color: 'black',
    fontSize: 15,
    minWidth: '50%',
    marginStart: 10,
  },
  imgStyl: {
    height: 180,
    width: '100%',
    borderRadius: 10,
  },
});
