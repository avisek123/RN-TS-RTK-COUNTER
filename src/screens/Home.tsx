import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/appHooks'
import MyModal from '../component/MyModal'
const Home = () => {
 const auth= useAppSelector(state=>state.authSlicer?.isLoggedIn)
 const modalText = useAppSelector(state=>state.modalSlicer?.modalContent)
 const dispatch=  useAppDispatch();
 const [myModal,setMyModal]= React.useState(false)

 
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <Text
      style={{
        fontSize:20,
      }}
      >
      {
        auth ? `Logged In ${modalText}` : `Not Logged In ${modalText}`
      }
    </Text>

    <Button
    title='Open Modal'
    onPress={()=>setMyModal(true)}
    
    />
    <MyModal
    myModal={myModal}
    setMyModal={setMyModal}
    
    
    />

      {/* <Button
      title='Login'
      onPress={()=>dispatch(login())}
      />
      <Button
     onPress={()=>dispatch(logout())}
      title='Logout'
      /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})