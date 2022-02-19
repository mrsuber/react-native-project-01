import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components'
import {useNavigation} from '@react-navigation/native'

const NewPasswordScreen = ({token,setToken}) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }





  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create New password</Text>
        <CustomInput value={code} setValue={setCode} placeholder="Enter Code" />
        <CustomInput
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />

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
