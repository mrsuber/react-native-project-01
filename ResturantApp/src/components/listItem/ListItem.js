import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
//
// Icon.loadFont();
// <Icon name="remove" size={20} color="firebrick"/>
const ListItem = ({info, deleteItem, detailsInputScreen}) => {
  return (
    <TouchableOpacity style={styles.listInfo} key={info.id}>
      <View style={styles.listInfoView}>
        <Text style={styles.listInfoText}>
          {info.FirstName} {' '} {info.LastName}
        </Text>
        <View style={styles.btnContainer}>
          <Text style={styles.btn} onPress={detailsInputScreen}>detail</Text>
          <Text style={styles.btn} onPress={() => deleteItem(info.id)}>
            remove
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listInfo:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderBottomWith:1,
    borderColor:'#eee',
    border:1,
  },
  listInfoView:{

    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  img:{
    width:70,
    hieght:70,
    borderRadius: 100 / 2,
  },
  listInfoText:{
    fontSize: 18,
  },
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  btn:{
    fontSize:12,
    padding:5,
    backgroundColor:'#130f40bd',
    color:'white',
    margin:5,
    fontWeight:'bold',
    borderRadius:5,
  }
});
export default ListItem;
