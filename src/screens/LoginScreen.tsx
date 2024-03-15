import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import TextFieldInput from '../components/textFieldInput';
import ButtonComponent from '../components/Button';
import {LoginStyles} from '../assets/styles/LoginStyles';

const LoginScreen = () => {
  const onChangeText = () => {
    console.log('Hello world');
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.subContainer}>
        <View style={LoginStyles.headerContainer}>
          <Image
            resizeMode="contain"
            style={LoginStyles.logo}
            source={require('../assets/images/logo/logo.jpg')}
          />
        </View>
        <View style={LoginStyles.bodyContainer}>
          <View style={LoginStyles.inputView}>
            <TextFieldInput
              label=""
              onChangeText={onChangeText}
              style={LoginStyles.inputTextField}
            />
          </View>
          <View style={LoginStyles.buttonContainer}>
            <TouchableOpacity style={LoginStyles.loginButton}>
              <View>
                <Text style={{color: 'white', letterSpacing: 3}}>VERIFY</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'black', letterSpacing: 3}}>
                Didn't receive the OTP?
              </Text>
              <Text style={{color: 'blue', letterSpacing: 3}}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
