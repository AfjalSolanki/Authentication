//import liraries
import React, {Component} from 'react';
import {View, Pressable, Text, StyleSheet, TextInput} from 'react-native';
import Color from '../theme/Color';
import Font from '../theme/Font';
import Image from '../theme/Image';
import {responsiveFontSize} from '../theme/ResponsiveSize';
import ShadowRadiusView from '../components/ShadowRadiusView';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormContainer from '../components/FormContainer';

// create a component
const HomeScreen = ({navigation}) => {
  return (
    <FormContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable>
            <FontAwesome name="align-justify" size={25} color={'black'} />
          </Pressable>
          <Text style={styles.heading}>
            {'Hello'}
            <Text style={{color: '#000'}}>{'Afjal'}</Text>
          </Text>
          <Pressable onPress={() => {}}>
            <Feather name="bell" size={25} color={'black'} />
            <View style={styles.bellDot} />
          </Pressable>
        </View>

        <ShadowRadiusView style={styles.container}>
          {/* <Text
        style={{
          color: Color.black,
          fontFamily: Font.POPPINS_BOLD,
          fontSize: responsiveFontSize(18),
        }}>
        HomeScreen
      </Text> */}
          <TextInput
            style={{height: 33}}
            placeholder="rrrrr"
            placeholderTextColor={'red'}
          />
        </ShadowRadiusView>
      </View>
    </FormContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  container: {
    // flex: 1,
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  heading: {
    color: 'red',
    fontSize: 17,
    fontFamily: Font.POPPINS_BOLD,
    flex: 1,
    lineHeight: 28,
    marginStart: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bellDot: {
    height: 6,
    width: 6,
    backgroundColor: 'red',
    borderRadius: 4,
    position: 'absolute',
    right: 4,
    top: 3,
  },
});

//make this component available to the app
export default HomeScreen;
