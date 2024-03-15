import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  bodyContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '90%',
    backgroundColor: '#eee',
    position: 'relative',
    color: 'black',
  },
  inputTextField: {
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    position: 'relative',
    width: '90%',
    height: 45,
    backgroundColor: '#37be8b',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  resendOtp: {
    color: 'black',
  },
});
