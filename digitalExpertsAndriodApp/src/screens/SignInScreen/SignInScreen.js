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
import {
  CustomInput,
  CustomButton,
  SocialSignInButton,
  Header,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {DetailInputScreen} from '../../screens'
import {checkImage,imageUpload} from '../../imageUpload/imageUpload'
// import AsyncStorage from '@react-native-async-storage/async-storage'


const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [login, setLogin] = useState(true);
  const [token, setToken] = useState('')
  const [username, setUserName] = useState('')
  const [userId, setUserId] = useState('');

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
        setToken(data.token)
        setUserName(data.username)
        setUserId(data.userId)

        setLoading(false)
        setLogin(false)

      } catch (error) {
        setLoading(false)
        Alert.alert('Error', "Invalid credentials");

      }
    }
  };

  //
  // useEffect(() => {
  //   const getData = async () => {
  // try {
  //       const value = await AsyncStorage.getItem('authToken');
  //       if (value !== '' && value !== null) {
  //         // value previously stored
  //       navigation.navigate('Home');
  //       } else {
  //         navigation.navigate('SignIn');
  //       }
  //     } catch (e) {
  //   // error reading value
  // }
  //   };
  //
  //   getData();
  // }, [navigation]);

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }



  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }

  const onLogOutPress = () =>{
    setToken('')
    setUserId('')
    setUserName('')
    setLogin(true)
  }
  const addInfoLog = async info => {

    let file1 ={
      name:new Date() + '_idcardfront',
      uri:info.IdCardFront.path,
      type:info.IdCardFront.mime,
      size: info.IdCardFront.size,
      lastModified: info.IdCardFront.modificationDate,
    }

    let file2 = {
      name:new Date() + '_idcardback',
      uri:info.IdCardBack.path,
      type:info.IdCardBack.mime,
      size: info.IdCardBack.size,
      lastModified: info.IdCardBack.modificationDate,
    }

    let file3 ={
      name:new Date() + '_idpassport',
      uri:info.Passport1.path,
      type:info.Passport1.mime,
      size: info.Passport1.size,
      lastModified: info.Passport1.modificationDate,
    }
    const err1 = checkImage(file1)
    const err2 = checkImage(file2)
    const err3 = checkImage(file3)
    if (err1) {
      return Alert.alert('Error', err1);

    }
    if (err2) {
      return Alert.alert('Error', err2);
    }
    if (err3) {
      return Alert.alert('Error', err3);
    }

    const images = await imageUpload([file1, file2, file3]);

  }


  const addInfo = async info => {
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    }

    try {
      setLoading2(true)
      let file1 ={
        name:new Date() + '_idcardfront',
        uri:info.IdCardFront.path,
        type:info.IdCardFront.mime,
        size: info.IdCardFront.size,
        lastModified: info.IdCardFront.modificationDate,
      }

      let file2 = {
        name:new Date() + '_idcardback',
        uri:info.IdCardBack.path,
        type:info.IdCardBack.mime,
        size: info.IdCardBack.size,
        lastModified: info.IdCardBack.modificationDate,
      }

      let file3 ={
        name:new Date() + '_idpassport',
        uri:info.Passport1.path,
        type:info.Passport1.mime,
        size: info.Passport1.size,
        lastModified: info.Passport1.modificationDate,
      }
      const err1 = checkImage(file1)
      const err2 = checkImage(file2)
      const err3 = checkImage(file3)
      if (err1) {
        return Alert.alert('Error', err1);

      }
      if (err2) {
        return Alert.alert('Error', err2);
      }
      if (err3) {
        return Alert.alert('Error', err3);
      }

      const images = await imageUpload([file1, file2, file3]);

      let data={
        SubmitedBy: userId,
        FirstName: info.FirstName,
        LastName: info.LastName,
        DateOfBirth: info.DateOfBirth,
        PlaceOfBirth: info.PlaceOfBirth,
        MotherName: info.MotherName,
        PhoneNumber: info.PhoneNumber,
        IdCardNumber: info.IdCardNumber,
        Region: info.Region,
        Residence: info.Residence,
        Images: images,
      }


      const res = await axios.post(
        'https://digital-experts.herokuapp.com/api/private/createnewprodject',
        data,
        config,
      );
      Alert.alert('Success', 'Form uploaded successfully');
      setLoading2(false)
    } catch (error) {
      setLoading2(false)

      Alert.alert('Error', 'Upload Error, please try again');
    }
  };

  return (
    <>
    {token
    ?<ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
              <Header title={`Wellcome ${username}`} />
              <DetailInputScreen addInfo={addInfo} userId={userId} loading={loading2} />
        </View>
          {
            loading
            ? <CustomButton text="Logging out ..." type="TERTIARY" />
            : <CustomButton text="Log out" onPress={onLogOutPress} type="TERTIARY" />}
      </ScrollView>

    :<ScrollView showsVerticalScrollIndicator={false}>
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


   }
    </>
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
