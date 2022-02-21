import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Modal,
  useWindowDimensions,

} from 'react-native';
import {
  CustomInput,
  CustomButton,
  CustomDropdown,
  CustomRecidentDropdown,
  ModalPicker2
} from '../../components';
import {useNavigation} from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import img from '../../../assets/images/me.png'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
//

const DetailInputScreen = ({addInfo, userId,loading}) => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [placeOfBirth, setPlaceOfBirth] = useState('')

  const [motherName, setMotherName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [idCardNumber, setIdCardNumber] = useState('')
  const [region, setRegion] = useState('Southwest')
  const [residence, setResidence] = useState('Buea')


  const [idCardFront, setIdCardFront] = useState('')
  const [idCardBack, setIdCardBack] = useState('')
  const [passport1, setPassport1] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [chooseData, setChooseData] = useState('')

  const changeModalVisibility = bool => {
    setIsModalVisible(bool)

  }

  const setData = option => {
    setChooseData(option)
    // setValue(option)
  }

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
    id:userId,
    FirstName: firstName,
    LastName: lastName,
    DateOfBirth: dateOfBirth,
    PlaceOfBirth:placeOfBirth,
    MotherName:motherName,
    PhoneNumber:phoneNumber,
    IdCardNumber:idCardNumber,
    Region:region,
    Residence:residence,
    IdCardFront: idCardFront,
    IdCardBack: idCardBack,
    Passport1: passport1,
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
    } else if (!region) {
      Alert.alert('Error', 'please enter your region')
    } else if (!residence) {
      Alert.alert('Error', 'please enter your recident')
    } else if (!idCardFront) {
      Alert.alert('Error', 'please enter your Front Image of Id Card')
    } else if (!idCardBack) {
      Alert.alert('Error', 'please enter your Back Image of Id Card')
    } else if (!passport1) {
      Alert.alert('Error', 'please enter your Passport 1')
    } else {
      changeModalVisibility(true)

    }
  };
  const runAddInfo = () => {
    addInfo(obj);
    changeModalVisibility(false)
  }
  const takePhotoFromCamera1 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport1(image)
    })
  }

  const choosePhotoFromLibrary1 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setPassport1(image)
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
      setIdCardFront(image)



    })
  }

  const choosePhotoFromLibrary3 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardFront(image)
    })
  }

  const takePhotoFromCamera4 = () => {
    ImagePicker.openCamera({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardBack(image)
    })
  }

  const choosePhotoFromLibrary4 = () => {
    ImagePicker.openPicker({
      width:300,
      height:400,
      cropping:true,
    }).then(image => {
      setIdCardBack(image)
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
        <CustomDropdown value={region} setValue={setRegion} />
        <CustomRecidentDropdown region ={region} value={residence} setValue={setResidence} />

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
          source={{uri:idCardFront.path}}
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
            source={{uri:idCardBack.path}}
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
            source={{uri:passport1.path}}
            style={styles.logo}
            resizeMode="contain"
          />
        }
          </TouchableOpacity>
        </View>

        {loading
          ?<TouchableOpacity style={styles.btn} onPress={onInfoSubmitPressed}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} color="#ff7800" />{'  '} Submiting ...
          </Text>
        </TouchableOpacity>
          :<TouchableOpacity style={styles.btn} onPress={onInfoSubmitPressed}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} color="#ff7800" />{'  '} Add Info
          </Text>
        </TouchableOpacity>}
        <Modal
          transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}>
            <ModalPicker2
              changeModalVisibility={changeModalVisibility}
              setData={setData}
              selectRegion={true}
              runAddInfo={runAddInfo}
              firstName={firstName}
              lastName={lastName}
              dateOfBirth={dateOfBirth}
              placeOfBirth={placeOfBirth}
              motherName={motherName}
              phoneNumber={phoneNumber}
              idCardNumber={idCardNumber}
              region={region}
              residence={residence}
              idCardFront={idCardFront}
              idCardBack={idCardBack}
              passport1={passport1}

            />
        </Modal>

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
    color:'#f0932a',
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
    backgroundColor:'#010101',
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
    color:'#f0932a',
    fontSize:20,
    textAlign:'center',
  },
  logo: {
    width:150,
    height:150,
  },
})
export default DetailInputScreen
