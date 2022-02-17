import React from 'react'
import {CustomButton} from '../../components'
// import {View} from 'react-native'
const SocialSignInButton = () => {
  const onSignInFacebook = () => {
    console.warn('sign in with facebook');
  }

  const onSignInGoogle = () => {
    console.warn('Sign in with google');
  }

  const onSignInApple = () => {
    console.warn('Sign in with Apple');
  }


  return (
    <>
    {/*<CustomButton
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
      text="Sign In with Apple"
      onPress={onSignInApple}
      bgColor="#e3e3e3"
      fgColor="#363636"
    />*/}

    </>
  )
}

export default SocialSignInButton
