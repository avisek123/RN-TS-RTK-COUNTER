import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/appHooks'
import { login, logout } from '../features/auth/AuthSlicer'
const Home = () => {
 const auth= useAppSelector(state=>state.authSlicer?.isLoggedIn)
 const dispatch=  useAppDispatch();
 
  return (
    <View>
      <Text>
      {
        auth ? 'Logged In' : 'Not Logged In'
      }
    </Text>

      <Button
      title='Login'
      onPress={()=>dispatch(login())}
      />
      <Button
     onPress={()=>dispatch(logout())}
      title='Logout'
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})