import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components'

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSendPressed = () => {
    console.warn('sending email');
  };

  const onSignInPress = () => {
    console.warn('Sign in');
  }





  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>New your password</Text>
        <CustomInput value={code} setValue={setCode} placeholder="Enter Code" />
        <CustomInput
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter New Password"
        />
        <CustomButton text="Send" onPress={onSendPressed} />

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
    margin: 10,
  },
  link:{
    color: '#fdb075',
  }
})
export default NewPasswordScreen
