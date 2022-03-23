import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetPostQuery } from '../services/post'

const Home = () => {
  const {data,isLoading,error}=  useGetPostQuery();
  console.log(data)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})