import { Dimensions, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../hooks/appHooks'
import { setModalContent } from '../features/modal/modalSlice'
interface IMyModal {
    myModal: boolean
    setMyModal: (value: boolean) => void
}
const MyModal = ({myModal,setMyModal}:IMyModal) => {
 const dispatch=  useAppDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={myModal}
      onRequestClose={() => setMyModal(false)}
      
      >
      <TouchableWithoutFeedback 
      onPress={() => setMyModal(false)}
      
      >
        <SafeAreaView
          style={{
          flex: 1,
          justifyContent: 'center',
            alignItems: 'center',
          }}>
              <TouchableOpacity
              onPress={() => {
                setMyModal(false)
                dispatch(setModalContent('Hello World'))
              }}
              
              >
              <Text>Hello World</Text>
              </TouchableOpacity>
              <TouchableOpacity>

              <Text>Hello Universe</Text>
              </TouchableOpacity>
         
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default MyModal

const styles = StyleSheet.create({})