import React, { useState }  from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar
} from 'react-native';
import {IconButton, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {Input} from 'native-base';

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-with-line');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-with-line');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-with-line') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={styles.Container}>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
      <TouchableOpacity>
        <Icon
          name="arrowleft"
          size={25}
          color="#121110"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <View style={styles.Container1}>
        <Text style={styles.Logo}>Together</Text>
      </View>
      <View style={styles.Container2}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            marginStart: 10,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput
          style={styles.numTextInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your user name"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter your password"
          placeholderTextColor={'gray'}
          
          value={password}
          
          onChangeText={text => setPassword(text)}
          secureTextEntry={passwordVisibility}
          />
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <Icon1
            name={rightIcon}
            size={25}
            color="gray"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{color: 'black', alignSelf: 'flex-end', marginEnd: 10}}>
          Forgot password?
        </Text>
      </View>

      <View style={styles.Container3}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 40, marginStart: 10}}>
        <Image
          source={require('../assets/images/logo_gmail.png')}
          style={{height: 50, width: 50}}
        />
        <Image
          source={require('../assets/images/facebook_logo.png')}
          style={{height: 40, width: 40,marginStart: 5}}
        />
      </View>
      <View style={{marginTop: 50, marginStart: 10}}>
        <Text style={{color: 'black'}}>Privacy Policy</Text>
        <Text style={{color: 'black', marginTop: 8}}>Term & Conditions</Text>
      </View>
      {/* <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 50}}>
        <Text style={{color: 'black'}}>Not a member?</Text>
        <Text style={{color: 'green'}}>Register now</Text>
      </View> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container1: {
    alignItems: 'center',
    marginTop: 40,
  },
  Container2: {
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  Container3: {
    backgroundColor: '#3949AB',
    width: '90%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  Logo: {
    color: '#3949AB',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Lato'
  },
  iconStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 10,
    marginTop: 10,
   
  },
  numTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingStart: -10,
    color: 'black',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'gray',
    fontWeight: 'bold',
    fontSize: 15
  },
  btnStyle: {
    borderRadius: 50,
    marginStart: 20,
    backgroundColor: 'black',
  },
  corner: {
    width: 250,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 10,

    fontSize: 50,
    textAlign: 'justify',
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  inputField: {
    padding: 10,
    paddingStart: -10,
    fontSize: 15,
    width: '90%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  }
});
