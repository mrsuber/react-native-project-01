import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import Logo from '../../../assets/images/mainlogo.jpeg'
import axios from 'axios'
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function validateEmail(emailToTest) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailToTest);
  }

  const onSignInPressed = async () => {
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
      const config = {
        header:{
          'Content-Type': 'application/json',
        }
      }

      try {
        setLoading(true)
        const {data} = await axios.post(
          'https://digital-experts.herokuapp.com/api/auth/login',
          {email, password},
          config,
        );

        try {
          await AsyncStorage.setItem('authToken', data.token);
          await AsyncStorage.setItem('username', data.user.username);
          await AsyncStorage.setItem('userId', data.user._id);
          navigation.navigate('Home');
          setLoading(false)
        } catch (error) {
          setLoading(false)
          Alert.alert("Error","An error ocured during signIn, try again")
          // saving error
        }
      } catch (error) {
        setLoading(false)
        Alert.alert('Error', "Invalid credentials");

        // setError(error.response.data.error)
        //   setTimeout(()=>{
        //     setError("")
        //   },5000)
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
  try {
        const value = await AsyncStorage.getItem('authToken');
        if (value !== '' && value !== null) {
          // value previously stored
        navigation.navigate('Home');
        } else {
          navigation.navigate('SignIn');
        }
      } catch (e) {
    // error reading value
  }
    };

    getData();
  }, [navigation]);

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
        { loading
          ?<CustomButton text="Submiting ..." fgColor="#f0932a"/>
          :<CustomButton text="Sign In" onPress={onSignInPressed} fgColor="#f0932a"/>}

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButton />


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
    width: '20%',
    borderRadius:100 / 2,
    maxWidth: 500,
    maxHeight: 200,
  },
})
export default SignInScreen
