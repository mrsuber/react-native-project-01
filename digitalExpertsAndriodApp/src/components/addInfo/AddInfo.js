import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
//

const AddInfo = ({detailsInputScreen}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={detailsInputScreen}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} color="#ff7800" />{'  '} Add Info
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
input:{
  height:60,
  padding:8,
  fontSize:16,
},
btn:{
  backgroundColor:'#130f40bd',
  padding:9,
  margin:5,
  borderRadius:10,

},
btnText:{
  color:'white',
  fontSize:20,
  textAlign:'center',
},
})

export default AddInfo;
