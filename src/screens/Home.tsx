import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../hooks/appHooks'
const Home = () => {
 const auth= useAppSelector(state=>state.authSlicer?.isLoggedIn)
 console.log(auth)
  return (
    <View>
      <Text>
      {
        auth ? 'Logged In' : 'Not Logged In'
      }

      </Text>

      <Button
      title='Login'
      
      
      />
      <Button
      title='Logout'
      
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})