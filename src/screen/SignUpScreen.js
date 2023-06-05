import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {ToastMessage} from '../utils/Utils';
import Fonts from '../theme/Font';
import FormBackHeader from '../components/FormBackHeader';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validateErrors = {};
    let isValid = true;
    if (!user.email) {
      isValid = false;
      validateErrors.email = 'Please enter a valid email';
    }
    if (!user.password) {
      isValid = false;
      validateErrors.password = 'Please enter a valid password';
    } else if (user.password.length < 8) {
      isValid = false;
      validateErrors.password = 'Password must be min 8 characters';
    }
    if (!user.passwordConfirmation) {
      isValid = false;
      validateErrors.passwordConfirmation = 'Please confirm password';
    } else if (user.passwordConfirmation.length < 8) {
      isValid = false;
      validateErrors.passwordConfirmation = 'Password must be min 8 characters';
    }

    if (user.password !== user.passwordConfirmation) {
      isValid = false;
      validateErrors.confirm_password = 'Passwords does not match.';
    } else {
      validateErrors.confirm_password = '';
    }

    setErrors(validateErrors);

    return isValid;
  };
  return (
    <View style={styles.container}>
      <FormBackHeader
        title={'Signup'}
        onPressLeft={() => navigation.goBack()}
      />
      {/* <Loader loading={loading} /> */}
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errors.email ? <Text>{errors.email}</Text> : ''}

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {
          validate();
        }}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
