import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components'
import {useNavigation} from '@react-navigation/native'

const FogotPasswordScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }

  const onResendCodePress = () => {
    console.warn('Resend code');
  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          value={code}
          setValue={setCode}
          placeholder="Enter Your confirmation code"
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />


        <CustomButton
          text="Resend Code"
          onPress={onResendCodePress}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051c60',
    margin:10,
  },
  text:{
    color:'gray',
    margin:10
  },
  link:{
    color:'#fdb075',
  }
})
export default FogotPasswordScreen
