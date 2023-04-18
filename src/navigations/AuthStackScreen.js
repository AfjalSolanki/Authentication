import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import SignInScreen from '../screen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen';
const AuthStack = createStackNavigator();
const AuthStackScreen = ({navigation}) => (
  <AuthStack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
