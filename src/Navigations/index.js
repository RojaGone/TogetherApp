import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoaderScreen from '../screens/LoaderScreen';
import LoginScreen from '../screens/LoginScreen';
import HomePage from '../screens/HomePage';
import EventInformationPage from '../screens/EventInformationPage';
import SeatingArrangementPage1 from '../screens/SeatingArrangementPage1'
import ThankYouPage from '../screens/ThankYouPage';
import SeatingArrangementPage2 from '../screens/SeatingArrangementPage2';
import ConfirmationPage from '../screens/ConfirmationPage';

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
        <Stack.Screen name="HomePage" component={HomePage} options={{title: 'Home', headerTitleAlign: 'center'}} />
        <Stack.Screen name="EventInformationPage" component={EventInformationPage} options={{title: 'Event Information', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="SeatingArrangementPage1" component={SeatingArrangementPage1} options={{title: 'Seating Arrangement', headerTitleAlign: 'center'}} />
        <Stack.Screen name="ThankYouPage" component={ThankYouPage} options={options} />
        <Stack.Screen name="SeatingArrangementPage2" component={SeatingArrangementPage2} options={{title: 'SeatingArrangement', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} options={{title: 'Confirmation', headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
