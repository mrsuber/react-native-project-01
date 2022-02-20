import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  Image
} from 'react-native'
import {CustomButton} from '../../components'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker2 = ({
  changeModalVisibility,
  setData,
  runAddInfo,
  firstName,
  lastName,
dateOfBirth,
placeOfBirth,
motherName,
phoneNumber,
idCardNumber,
region,
residence,
idCardFront,
idCardBack,
passport1,
}) => {



   return (
     <View

       style={styles.container}>
       <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
         <ScrollView>
         <Text style={styles.textEx}>{`First Name: ${firstName}`}</Text>
         <Text style={styles.textEx}>{`Last Name: ${lastName}`}</Text>
         <Text style={styles.textEx}>{`Date Of Birth : ${dateOfBirth}`}</Text>
         <Text style={styles.textEx}>{`Place Of Birth : ${placeOfBirth}`}</Text>
         <Text style={styles.textEx}>{`Mother Name : ${motherName}`}</Text>
         <Text style={styles.textEx}>{`Phone Number : ${phoneNumber}`}</Text>
         <Text style={styles.textEx}>{`ID Card Number : ${idCardNumber}`}</Text>
         <Text style={styles.textEx}>{`Region : ${region}`}</Text>
         <Text style={styles.textEx}>{`Recidence : ${residence}`}</Text>
         <View style={styles.imageContainer}>
          <Text>{'Front ID Card Image'}</Text>
          <Image
            source={{uri:idCardFront}}
            style={styles.logo}
            resizeMode="contain"
          />
         </View>

         <View style={styles.imageContainer}>
          <Text>{'Back ID Card Image'}</Text>
          <Image
            source={{uri:idCardBack}}
            style={styles.logo}
            resizeMode="contain"
          />
         </View>

         <View style={styles.imageContainer}>
          <Text>{'Passport Image'}</Text>
          <Image
            source={{uri:passport1}}
            style={styles.logo}
            resizeMode="contain"
          />
         </View>



         <CustomButton text="Confirm" onPress={runAddInfo} fgColor="#f0932a"/>
         <CustomButton text="Cancel" onPress={() => changeModalVisibility(false)} fgColor="#f0932a"/>

         </ScrollView>
       </View>
     </View>
   );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor: '#e8e8e8',
    borderColor:'#e8e8e8',
    borderRadius:10,
  },
  option: {
    alignItems:'flex-start',
    padding:5,
  },
  text:{
    marginVertical:5,
    margin:5,
    fontSize:20,
    fontWeight:'bold',
  },
  logo: {
    width:150,
    height:150,
  },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    margin:10,
    alignItems:'center'

  },
  textEx:{
    margin:10,
  }
})

export default ModalPicker2
