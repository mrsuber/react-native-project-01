import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native'
import {CustomButton} from '../../components'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker2 = ({changeModalVisibility, setData, onInfoSubmitPressed}) => {



   return (
     <TouchableOpacity
       onPress={() => changeModalVisibility(false)}
       style={styles.container}>
       <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
         <ScrollView>
         <Text>Hello world</Text>
         <CustomButton text="Confirm" onPress={onInfoSubmitPressed}/>
         </ScrollView>
       </View>
     </TouchableOpacity>
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
})

export default ModalPicker2
