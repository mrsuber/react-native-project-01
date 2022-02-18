import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  useWindowDimensions,

} from 'react-native';
import {CustomInput, CustomButton, SocialSignInButton} from '../../components';
import {useNavigation} from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import img from '../../../assets/images/me.png'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
//

const DetailInputScreen = ({addInfo}) => {

  const {height} = useWindowDimensions();
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


  const [idCardFront, setIdCardFront] = useState('')
  const [idCardBack, setIdCardBack] = useState('')
  const [passport1, setPassport1] = useState('')
  const [passport2, setPassport2] = useState('')




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
    Images: [idCardFront, idCardBack, passport1, passport2],
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
    } else if (!idCardFront) {
      Alert.alert('Error', 'please enter your recident')
    } else if (!idCardBack) {
      Alert.alert('Error', 'please enter your recident')
    } else if (!passport1) {
      Alert.alert('Error', 'please enter your recident')
    } else if (!passport2) {
      Alert.alert('Error', 'please enter your recident')
    } else {
      addInfo(obj);
    }
  };

  const takePhotoFromCamera1 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport1(image.path)
    })
  }

  const choosePhotoFromLibrary1 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport1(image.path)
    })
  }

  const takePhotoFromCamera2 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport2(image.path)
    })
  }

  const choosePhotoFromLibrary2 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport2(image.path)
    })
  }

  const takePhotoFromCamera3 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      // console.log("front image",image)
      // console.warn(image.path);
      setIdCardFront(image.path)



    })
  }

  const choosePhotoFromLibrary3 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardFront(image.path)
    })
  }

  const takePhotoFromCamera4 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardBack(image.path)
    })
  }

  const choosePhotoFromLibrary4 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardBack(image.path)
    })
  }

  const uploadPassPort1 = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () => choosePhotoFromLibrary1(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera1(),
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

  const uploadPassPort2 = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () => choosePhotoFromLibrary2(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera2(),
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

  const uploadIdPhotoFront = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () =>choosePhotoFromLibrary3(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera3(),
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

  const uploadIdPhotoBack = () => {
    Alert.alert(
      'Upload Photo',
      'Choose Method of Upload',
      [
        {
          text: 'Galary',
          onPress: () =>choosePhotoFromLibrary4(),
          style: 'cancel',
        },
      {
        text: 'Camera',
          onPress: () => takePhotoFromCamera4(),
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

        <View style={styles.btnCardContainer} >
        <TouchableOpacity style={styles.btnCard} onPress={uploadIdPhotoFront}>
          {
            idCardFront===''
          ? <View style={styles.btnCardTextView}>
            <Text>
              <Icon name="camera" size={20} color="#ff7800" />
            </Text>
            <Text style={styles.btnCardText}>{'    '}Id Card Front</Text>
          </View>
        : <Image
          source={{uri:idCardFront}}
          style={styles.logo}
          resizeMode="contain"
        />
        }
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCard} onPress={uploadIdPhotoBack}>
          {idCardBack===''
          ?<Text style={styles.btnCardText}>
            <Icon name="camera" size={20} color="#ff7800" />{'    '} Id Card Back
          </Text>
          :<Image
            source={{uri:idCardBack}}
            style={styles.logo}
            resizeMode="contain"
          />
        }
        </TouchableOpacity>
        </View>


        <View style={styles.btnCardContainer} >
        <TouchableOpacity style={styles.btnCard} onPress={uploadPassPort1}>
          {passport1===''
            ?<Text style={styles.btnCardText}>
            <Icon name="camera" size={20} color="#ff7800" />{'    '}Passport Photo1
          </Text>
          :<Image
            source={{uri:passport1}}
            style={styles.logo}
            resizeMode="contain"
          />
        }
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCard} onPress={uploadPassPort2}>
          {passport2===''
            ?<Text style={styles.btnCardText}>
            <Icon name="camera" size={20} color="#ff7800" />{'    '} Passport Photo2
          </Text>
          :<Image
            source={{uri:passport2}}
            style={styles.logo}
            resizeMode="contain"
          />
        }
        </TouchableOpacity>
        </View>

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
  btnCardContainer:{
    flexDirection:'row',
  },
  btnCard:{
    backgroundColor:'#e3e3e396',
    width:150,
    height:150,
    borderColor:'#e8e8e8',
    display:'flex',
    margin:5,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',

  },
  btnCardText:{
    color:'#fdb075',
    fontSize:14,
    fontWeight:'bold',

  },
  btnCardTextView:{
    flexDirection:'row',


  },
  btnText:{
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
  logo: {
    width:150,
    height:150,
  },
})
export default DetailInputScreen
