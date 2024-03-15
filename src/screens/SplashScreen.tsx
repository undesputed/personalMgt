import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import {TOTP} from 'totp-generator';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: any) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const [animating, setAnimating] = useState(true);

  const sendSMS = async (phoneNumber: string, message: any) => {
    const url = `sms:${phoneNumber}${message ? `?body=${message}` : ''}`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn('SMS not supported on this device');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const {otp} = TOTP.generate('JBSWY3DPEHPK3PXP', {
      digits: 6,
      algorithm: 'SHA-512',
      period: 120,
      timestamp: 1465324707000,
    });

    sendSMS('09296604887', otp);
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Auth');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo/logo.jpg')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#ffffff"
        size="large"
        style={styles.ActivityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  ActivityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
