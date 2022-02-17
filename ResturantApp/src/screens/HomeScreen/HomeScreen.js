import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.home}>home , sweet Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    fontSize: 24,
    alignSelf:'center',
  },
});
export default HomeScreen;
