import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
//

const DetailInputScreen = ({addInfo}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [placeOfBirth, setPlaceOfBirth] = useState('')

  const [motherName, setMotherName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [idCardNumber, setIdCardNumber] = useState('')
  const [town, setTown] = useState('')
  const [residence, setResidence] = useState('')
  const [idCardImage, setIdCardImage] = useState('')
  const [passportImage, setPassportImage] = useState('')




  //generates random id;
  let guid = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

  const obj = {
    id:guid(),
    FirstName: firstName,
    LastName: lastName,
    DateOfBirth: dateOfBirth,
    PlaceOfBirth:placeOfBirth,
    MotherName:motherName,
    PhoneNumber:phoneNumber,
    IdCardNumber:idCardNumber,
    Town:town,
    Residence:residence,
    IdCardImage:idCardImage,
    PhotoImage:passportImage,
  };

  const onInfoSubmitPressed = () => {
    if (!firstName) {
      Alert.alert('Error', 'please enter first name')
    } else if (!lastName) {
      Alert.alert('Error', 'please enter last name')
    } else if (!dateOfBirth) {
      Alert.alert('Error', 'please enter date of birth')
    } else if (!placeOfBirth) {
      Alert.alert('Error', 'please enter place of birth')
    } else if (!motherName) {
      Alert.alert('Error', 'please enter Mother Name')
    } else if (!phoneNumber) {
      Alert.alert('Error', 'please enter phone number')
    } else if (!idCardNumber) {
      Alert.alert('Error', 'please enter Id card number')
    } else if (!town) {
      Alert.alert('Error', 'please enter your town')
    } else if (!residence) {
      Alert.alert('Error', 'please enter your recident')
    } else {
      addInfo(obj);
    }
  };



  const takePhotoFromCamera = () =>{
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      console.log(image)
    })
  }

  const choosePhotoFromLibrary =() => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      console.log(image)
    })
  }

  const uploadPassPort = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () => choosePhotoFromLibrary(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera(),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
  );
  };

  const uploadIdPhoto = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () =>choosePhotoFromLibrary(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera(),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
  );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Input Information</Text>
        <CustomInput
          value={firstName}
          setValue={setFirstName}
          placeholder="John"
        />
        <CustomInput
          value={lastName}
          setValue={setLastName}
          placeholder="Doe"
        />
        <CustomInput
          value={dateOfBirth}
          setValue={setDateOfBirth}
          placeholder="12/02/1999"

        />
        <CustomInput
          value={placeOfBirth}
          setValue={setPlaceOfBirth}
          placeholder="Buea"

        />

        <CustomInput
          value={motherName}
          setValue={setMotherName}
          placeholder="MaryAnn"

        />
        <CustomInput
          value={phoneNumber}
          setValue={setPhoneNumber}
          placeholder="+237658855985"

        />
        <CustomInput
          value={idCardNumber}
          setValue={setIdCardNumber}
          placeholder="2325554555654"

        />
        <CustomInput value={town} setValue={setTown} placeholder="Buea" />
        <CustomInput
          value={residence}
          setValue={setResidence}
          placeholder="Moliko"

        />
        <CustomInput
          value={idCardImage}
          setValue={setIdCardImage}
          placeholder="image"

        />

        <TouchableOpacity style={styles.btnCard} onPress={uploadIdPhoto}>
          <Text style={styles.btnCardText}>
            <Icon name="camera" size={20} color="#ff7800" />{'    '} Upload Id Card Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCard} onPress={uploadPassPort}>
          <Text style={styles.btnCardText}>
            <Icon name="camera" size={20} color="#ff7800" />{'    '} Upload Passport Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={onInfoSubmitPressed}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} color="#ff7800" />{'  '} Add Info
          </Text>
        </TouchableOpacity>

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
    color:'#fdb075',
  },
  input:{
    height:60,
    padding:8,
    fontSize:16,
  },
  btn:{
    width:'100%',
    backgroundColor:'#130f40bd',
    padding:9,
    margin:5,
    borderRadius:10,

  },
  btnCard:{
    backgroundColor:'#e3e3e396',
    width:'100%',
    borderColor:'#e8e8e8',
    padding:9,
    margin:5,
    borderRadius:5,

  },
  btnCardText:{
    color:'#fdb075',
    fontSize:20,

  },
  btnText:{
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
})
export default DetailInputScreen