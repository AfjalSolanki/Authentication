import {Alert, StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
import FormContainer from '../components/FormContainer';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import FormButton from '../components/FormButton';
import Colors from '../theme/Color';
import Fonts from '../theme/Font';

const OtpScreen = () => {
    // const [{phone, userId}] = useAppData();
  
    const [loading, setLoading] = useState(false);
    const OTPRef = useRef(null);
    const [clearOTP, setClearOTP] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const onHandle = () => {
        if (otp.length < 6) {
          setOtpError('OTP is required');
        } else {
       alert('---')
        }
      };
  return (
    <FormContainer>
    <View>
    <OTPInputView
          style={styles.OtpInputStyle}
          keyboardType={'phone-pad'}
          ref={OTPRef}
        //   clearInputs={clearOTP}
          onCodeChanged={(code) => {
            setOtp(code);
            // setClearOTP(false);
          }}
          autoFocusOnLoad={true}
          codeInputFieldStyle={styles.underlineStyleBase}
          pinCount={6}
          onCodeFilled={(code) => {
            setOtp(code);
            // setClearOTP(false);
            setOtpError('');
          }}
        />
        {otpError && <Text style={styles.errorMessage}>{otpError}</Text>}

    <FormButton
        buttonTitle="Sign In"
        onPress={() => {
          // alert('0000')
          onHandle()
        }}
      />
    </View>
    </FormContainer>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({

    OtpInputStyle: {
        height: 88,
        width: 120,
        marginTop: 30,
        color: Colors.black,
      },
      underlineStyleBase: {
        borderWidth: 1,
        height: 50,
        width: 55,
        borderRadius: 5,
        color: Colors.black,
      },
      errorMessage: {
        color: 'red',
        fontSize: 16,
        fontFamily:Fonts.POPPINS_REGULAR,
      },

});
