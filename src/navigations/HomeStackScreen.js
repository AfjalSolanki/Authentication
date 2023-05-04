import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabe from './BottomTabe';
const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    // initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name="BottomTabe" component={BottomTabe} />
  </HomeStack.Navigator>
);
export default HomeStackScreen;
