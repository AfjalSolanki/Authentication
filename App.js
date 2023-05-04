import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './src/navigations/AuthStackScreen';
import HomeStackScreen from './src/navigations/HomeStackScreen';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const toastConfig = {
    success: props => (
      <BaseToast {...props} text1NumberOfLines={0} text2NumberOfLines={0} />
    ),
    error: props => (
      <ErrorToast {...props} text1NumberOfLines={0} text2NumberOfLines={0} />
    ),
  };

  return (
    <NavigationContainer>
      {true ? <HomeStackScreen /> : <AuthStackScreen />}
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
