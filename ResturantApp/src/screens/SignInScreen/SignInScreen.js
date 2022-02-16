import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/suber_logo1.png'
import {CustomInput, CustomButton} from '../../components'

const SignInScreen = () => {
  const {height} = useWindowDimensions()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onSignInPressed = () => {
    console.warn('Sign In');
  }

  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  }

  const onSignInFacebook = () => {
    console.warn('sign in with facebook');
  }

  const onSignInGoogle = () => {
    console.warn('Sign in with google');
  }


  const onSignUpPress = () => {
    console.warn('sign up');
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
          value={userName}
          setValue={setUserName}
          placeholder="UserName"
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

        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#004044"
        />

        <CustomButton
          text="Don't have an account? Create one"
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
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
})
export default SignInScreen
