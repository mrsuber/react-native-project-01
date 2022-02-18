import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/logo.png'
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native'

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const onSignInPressed = () => {
    //validate user
    if (!email) {
      Alert.alert('Error', 'please enter email')
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'please enter a valid email. example@gmail.com')
    } else if (!password) {
      Alert.alert('Error', 'please enter password')
    } else if (password.length < 6) {
      Alert.alert('Error', 'password must be at least 6 chars long')
    } else {
      navigation.navigate('Home');
    }
  
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }



  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
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
        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButton />

        <CustomButton
          text="Don't have an account? Create one."
          onPress={onSignUpPress}
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
  logo: {
    width: '50%',

    maxWidth: 500,
    maxHeight: 200,
  },
})
export default SignInScreen
