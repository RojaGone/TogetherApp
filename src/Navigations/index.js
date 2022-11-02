import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoaderScreen from '../screens/LoaderScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={options} />
        {/* <Stack.Screen name="LoaderScreen" component={LoaderScreen} options={options} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
