import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';

import {
  SignInScreen,
  SignUpScreen,
  ConfirmEmailScreen,
  FogotPasswordScreen,
  NewPasswordScreen
} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC',
  }
});

export default App;
