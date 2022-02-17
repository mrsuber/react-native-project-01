import React from 'react';
import {View, Text, StyleSheet, Image,useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png'
import {SplashBtn} from '../../components'
import {useNavigation} from '@react-navigation/native'

const SplashScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
    <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <SplashBtn
      text="Get Started"
      onPress={onSignInPressed}
      type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  logo:{
    width: '40%',
    maxWidth: 500,
    maxHeight: 200,
    marginVertical: 30,
  },
});
export default SplashScreen;
