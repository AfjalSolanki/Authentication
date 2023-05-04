import {
  StyleSheet,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {FC} from 'react';

const FormContainer = ({isLight, translucent, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F9F9F9"
        barStyle={isLight ? 'light-content' : 'dark-content'}
        translucent={translucent}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
  },
});
