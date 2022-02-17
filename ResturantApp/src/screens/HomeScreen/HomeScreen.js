import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {Header,ListItem, AddInfo} from '../../components';
import {DetailInputScreen} from '../../screens'
import img from '../../../assets/images/me.png'

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
    Town:'Buea',
    Residence:'Buea',
    IdCardImage:`${img}`,
    PhotoImage:`${img}`,
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
    Town:'Buea2',
    Residence:'Buea2',
    IdCardImage:`${img}`,
    PhotoImage:`${img}`,
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
    Town:'Buea3',
    Residence:'Buea3',
    IdCardImage:`${img}`,
    PhotoImage:`${img}`,
  }
];


const HomeScreen = () => {
  const [infos, setInfos] = useState(data);
  const navigation = useNavigation();

  const deleteItem = id => {
    setInfos(prevInfo => {
      return prevInfo.filter(info => info.id !== id)
    })
  }

  const detailsInputScreen = () => {
    console.warn('pop up with full detail');
  };

  const addInfo = info => {
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
          Town:info.Town,
          Residence:info.Residence,
          IdCardImage:info.IdCardImage,
          PhotoImage:info.PhotoImage,
        },
        ...prevInfo
      ]
    })
  }

  const [media, setMedia] = useState([])

  const handleChangeMedia = (e) =>{

      const files = [...e.target.files]
      let err = ""
      let newMedia = []

      files.forEach(file =>{
        if(!file) return err="File does not exist."
        if(file.size > 1024 * 1024 * 5 ){
          return err = "The image/video largest is 5mb."
        }

        return newMedia.push(file)

      })

      if(err)dispatch({ type:GLOBALTYPES.ALERT,payload:{error:err} })
      setMedia([...media, ...newMedia])
  }

  const handleDeleteMedia = (index) =>{
    const newArr = [...media]
    newArr.splice(index,1)
    setMedia(newArr)
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <Header title="User Info" />
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
