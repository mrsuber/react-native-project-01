import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';

import {SignInScreen} from './src/screens'

const App = () => {
  return (
    <SafeAreaView styles={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});

export default App;
