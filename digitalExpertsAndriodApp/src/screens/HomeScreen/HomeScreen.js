import React,{useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {Header,ListItem, AddInfo, CustomButton} from '../../components';
import {DetailInputScreen} from '../../screens'
import img from '../../../assets/images/me.png'
import {imageUpload} from '../../utils/imageUpload'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {useNavigation} from '@react-navigation/native'

const data = [
  {
    id:'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    FirstName: 'first Name',
    LastName: 'last name',
    DateOfBirth: '2/12/1998',
    PlaceOfBirth:'Buea',
    MotherName:'mother',
    PhoneNumber:'+23755465548',
    IdCardNumber:'1222211455211',
    Region:'south west',
    Residence:'Buea',
    Images: [`${img}`, `${img}`, `${img}`, `${img}`],
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    FirstName: 'first Name2',
    LastName: 'last name2',
    DateOfBirth: '2/12/1998',
    PlaceOfBirth:'Buea2',
    MotherName:'mother2',
    PhoneNumber:'+23755465548',
    IdCardNumber:'1222211455211',
    Region:'North',
    Residence:'Buea2',
    Images: [`${img}`, `${img}`, `${img}`, `${img}`],
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    FirstName: 'first Name3',
    LastName: 'last name3',
    DateOfBirth: '2/12/1998',
    PlaceOfBirth:'Buea3',
    MotherName:'mother3',
    PhoneNumber:'+23755465548',
    IdCardNumber:'1222211455211',
    Region:'north west',
    Residence:'Buea3',
    Images: [`${img}`, `${img}`, `${img}`, `${img}`],
  }
];


const HomeScreen = () => {
  const [infos, setInfos] = useState(data);
  const [loading, setLoading] = useState(false)
  // const [detail, setDetail] = useState([])
  const navigation = useNavigation();

  const deleteItem = id => {
    setInfos(prevInfo => {
      return prevInfo.filter(info => info.id !== id)
    })
  }

  const detailsInputScreen = (id) => {
    let detail = []
    for (let i = 0; i < infos.length; i++) {

      if (id === infos[i].id) {
        detail.push(infos[i])
      } else continue;
    }

    Alert.alert(
      `Details of ${detail[0].FirstName} ${detail[0].LastName}`,
      `Date of birth ${detail[0].DateOfBirth},
      Place of birth ${detail[0].PlaceOfBirth},
      Mothers Name ${detail[0].MotherName},
      Phone number ${detail[0].PhoneNumber},
      ID card nuber ${detail[0].IdCardNumber},
      Region ${detail[0].Region},
      Residence ${detail[0].Residence}`,

      [
        {
          text: 'Back',

          style: 'cancel',
        },
      {
        text: 'Remove',
          onPress: () => deleteItem(detail[0].id),
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

  const addInfo = info =>{

        Alert.alert(
          `Details of ${info.FirstName} ${info.LastName}`,
          `Date of birth ${info.DateOfBirth},
          Place of birth ${info.PlaceOfBirth},
          Mothers Name ${info.MotherName},
          Phone number ${info.PhoneNumber},
          ID card nuber ${info.IdCardNumber},
          Region ${info.Region},
          Residence ${info.Residence}`,

          [
            {
              text: 'Back',

              style: 'cancel',
            },
          {
            text: 'Confirm',
              onPress: () => addInfo2(info),
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
  const addInfo2 = info => {
    const images2 = imageUpload(info.Images)
    // console.log(images2)
    console.warn(images2)
    setInfos(prevInfo =>{
      return [
        {
          id:info.id,
          FirstName: info.FirstName,
          LastName: info.LastName,
          DateOfBirth: info.DateOfBirth,
          PlaceOfBirth:info.PlaceOfBirth,
          MotherName:info.MotherName,
          PhoneNumber:info.PhoneNumber,
          IdCardNumber:info.IdCardNumber,
          Region:info.Region,
          Residence: info.Residence,
          Images: images2,
        },
        ...prevInfo
      ]
    })
  }

  const onLogOutPress = async () =>{
    try {
      setLoading(true)
      await AsyncStorage.setItem('authToken', '');
      navigation.navigate('SignIn');
      setLoading(false)
    } catch (error) {
      setLoading(false)
      Alert.alert("Error","An error ocured during log out, try again")
      // saving error
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


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <Header title= 'Wellcome to Digital Experts' />
        <DetailInputScreen addInfo={addInfo}/>
        {infos.map((info, index) => (
          <ListItem
            info={info}
            key={index}
            deleteItem={deleteItem}
            detailsInputScreen={detailsInputScreen}
          />
      ))}
    </View>
      {
        loading
        ? <CustomButton text="Logging out ..." type="TERTIARY" />
        : <CustomButton text="Log out" onPress={onLogOutPress} type="TERTIARY" />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop:60,
    backgroundColor:'white',
  },

});
export default HomeScreen;
