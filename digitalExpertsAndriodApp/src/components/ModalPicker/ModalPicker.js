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
import {db} from '../../data/data'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const OPTIONS = db.states
const ModalPicker = ({changeModalVisibility,setData, region, selectRegion=false, selectRecident=false}) => {

  const onPressItem = option => {
    changeModalVisibility(false)
    setData(option)
  };

  if (selectRegion === true) {

    const options = OPTIONS.map((option, index) =>{
      return(
        <TouchableOpacity
          style={styles.option}
          key={index}
          onPress={() => onPressItem(option.name)}>
          <Text style={styles.text}>{option.name}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <TouchableOpacity
        onPress={() => changeModalVisibility(false)}
        style={styles.container}>
        <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
          <ScrollView>{options}</ScrollView>
        </View>
      </TouchableOpacity>
    )


  } else if (selectRecident === true) {

    let town = {}
    let name = ''
    for (let i = 0; i < OPTIONS.length; i++) {
      let state=OPTIONS[i];

      if (state.name === region) {
        town[region] = state.cities;

      }else continue;
    }


    const options = town[region].map((option, index) =>{
      return(
        <TouchableOpacity
          style={styles.option}
          key={index}
          onPress={() => onPressItem(option.name)}>
          <Text style={styles.text}>{option.name}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <TouchableOpacity
        onPress={() => changeModalVisibility(false)}
        style={styles.container}>
        <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT / 2}]}>
          <ScrollView>{options}</ScrollView>
        </View>
      </TouchableOpacity>
    )
  } else return <></>;
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

export default ModalPicker
