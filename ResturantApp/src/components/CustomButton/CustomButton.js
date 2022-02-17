import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'


const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5,
  },
  container_PRIMARY:{
    backgroundColor:'#130f40bd',
  },

  container_TERTIARY: {
    border:1,
  },

  container_SECONDARY: {
    borderColor:'#3871f3',
    borderWidth:2,
  },
  text:{
    fontWeight:'bold',
    color:'white',
  },

  text_TERTIARY: {
    color:'gray',
  },
  text_SECONDARY: {
    color:'#3871f3',
  },
});

export default CustomButton;
