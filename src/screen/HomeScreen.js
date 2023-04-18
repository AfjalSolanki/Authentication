//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../theme/Color';
import Font from '../theme/Font';
import Image from '../theme/Image';
import {responsiveFontSize} from '../theme/ResponsiveSize';

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Color.black,
          fontFamily: Font.POPPINS_BOLD,
          fontSize: responsiveFontSize(18),
        }}>
        HomeScreen
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeScreen;
