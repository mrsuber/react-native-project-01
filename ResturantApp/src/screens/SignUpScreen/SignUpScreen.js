import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native'



const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cf_password, setCf_Password] = useState('')

  const onRegisterPressed = () => {
    //verify register confirm email
    navigation.navigate('ConfirmEmail');
  }




  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }

  const onTermsOfUsePressed = () => {
    console.warn('Terms of use');
  }

  const onPrivacyPolicyPress = () => {
    console.warn('Privacy Policy');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="John Doe"
        />
        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder="Example@gmail.com"
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <CustomInput
          value={cf_password}
          setValue={setCf_Password
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>By registering, you confirm that you accept our{' '} <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> {' '}and {' '}<Text style={styles.link} onPress={onPrivacyPolicyPress}>Privacy Policy</Text></Text>

          <SocialSignInButton/>

        <CustomButton
          text="Already have an account? Sign In"
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
    color:'#fdb075'
  }
})
export default SignUpScreen
