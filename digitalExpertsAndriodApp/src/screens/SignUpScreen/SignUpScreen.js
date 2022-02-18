import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView,Alert} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native'
import valid from '../../utils/valid'


const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cf_password, setCf_Password] = useState('')


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const onRegisterPressed = () => {
    //verify register confirm email

    if (!username) {
      Alert.alert('Error', 'please enter full name')
    } else if (username.length < 3) {
      Alert.alert('Error', 'fullname must be atleast 3 characters');
    } else if (!email) {
      Alert.alert('Error', 'please enter email')
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'please enter a valid email. example@gmail.com')
    } else if (!password) {
      Alert.alert('Error', 'please enter password')
    } else if (password.length < 6) {
      Alert.alert('Error', 'password must be at least 6 chars long')
    } else if (password !== cf_password) {
      Alert.alert('Error', 'Passwords do not match')
    } else {
      navigation.navigate('Home');
    }

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
