import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './src/navigations/AuthStackScreen';
import HomeStackScreen from './src/navigations/HomeStackScreen';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {useNetInfo} from '@react-native-community/netinfo';
import FormInternetConnectionModel from './src/components/FormInternetConnectionModel';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setVisible] = React.useState(false);

  const netInfo = useNetInfo();
  const toastConfig = {
    success: props => (
      <BaseToast
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
        {...props}
        text1NumberOfLines={0}
        text2NumberOfLines={0}
      />
    ),
    error: props => (
      <ErrorToast
      style={{borderLeftColor: 'red'}}

        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
        {...props}
        text1NumberOfLines={0}
        text2NumberOfLines={0}
      />
    ),
  };
  React.useEffect(() => {
    setTimeout(() => {
      if (!netInfo.isConnected) {
        setVisible(true);
      }
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {!netInfo.isConnected && (
        <FormInternetConnectionModel isVisible={isVisible} />
      )}
      {false ? <HomeStackScreen /> : <AuthStackScreen />}
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
