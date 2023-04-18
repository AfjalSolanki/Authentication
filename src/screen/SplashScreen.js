import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      navigation.replace('SignInScreen');
      setAnimating(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#307ecc'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/onboarding2.png')}
          style={{
            width: '90%',
            height: '50%',
            resizeMode: 'contain',
            margin: 30,
          }}
        />
        <ActivityIndicator
          animating={animating}
          color="green"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: 'white',
        }}>
        React Native Firebase Authentication
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'white',
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
