import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,TextInput
} from 'react-native';
import Profile from '../screen/Profile';
import HomeScreen from '../screen/HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShadowRadiusView from '../components/ShadowRadiusView';

const BottomTabe = () => {
  const [selected, setSelected] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      {selected == 0 ? (
        <HomeScreen />
      ) : selected == 1 ? (
        <Profile />
      ) : (
        <HomeScreen />
      )}
      {!isKeyboardVisible && (
        <ShadowRadiusView style={styles.bottomContainer}>
          {/* <View> */}
            <TouchableOpacity
              onPress={() => setSelected(0)}
              style={styles.bottomTabe}>
              <Ionicons
                name={selected === 0 ? 'md-home-outline' : 'md-home-sharp'}
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(1)}
              style={styles.bottomTabe}>
              <Ionicons
                name={selected === 1 ? 'md-home-outline' : 'md-home-sharp'}
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(2)}
              style={styles.bottomTabe}>
              <Ionicons
                name={selected === 2 ? 'md-home-outline' : 'md-home-sharp'}
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(3)}
              style={styles.bottomTabe}>
              <Ionicons
                name={selected === 3 ? 'md-home-outline' : 'md-home-sharp'}
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          {/* </View> */}
        </ShadowRadiusView>
      )}
    </View>
  );
};

export default BottomTabe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomTabe: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabeIcon: {
    width: 25,
    height: 25,
  },
});
