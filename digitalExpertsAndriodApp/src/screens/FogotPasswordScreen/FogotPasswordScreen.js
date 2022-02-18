import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components'
import {useNavigation} from '@react-navigation/native'


const ConfirmEmailScreen = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }





  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Enter Your Email"
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
export default ConfirmEmailScreen
