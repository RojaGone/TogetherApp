import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';

export default function SplashScreen() {
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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
          secureTextEntry={passwordVisibility}
        />
         <TouchableOpacity onPress={handlePasswordVisibility}>
            <Icon1 name={rightIcon}
          size={25}
          color="#121110"
          style={styles.iconStyle}

          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  inputContainer: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7'
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%',
    color: 'red'
  }
});