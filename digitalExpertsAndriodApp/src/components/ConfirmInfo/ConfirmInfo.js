import React, {useState} from 'react'
import {Text, View, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import {db} from '../../data/data'
import {ModalPicker2} from '../../components'

const ConfirmInfo = ({value, setValue}) => {
  const [database, setdatabase] = useState(db)
  const [chooseData, setChooseData] = useState(value)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const setData = option => {
    setChooseData(option)
    setValue(option)
  }
  const changeModalVisibility = bool => {
    setIsModalVisible(bool)
  }
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => changeModalVisibility(true)}>
      <Text style={styles.input}> {chooseData}</Text>
    </TouchableOpacity>
    <Modal
      transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker2
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          selectRegion={true}
        />
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e3e3e396',
    width:'100%',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5
  },
  input:{
    paddingVertical:12,
  }
})

export default ConfirmInfo
