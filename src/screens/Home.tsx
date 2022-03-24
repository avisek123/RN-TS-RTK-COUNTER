import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost, useAddPostMutation, useGetPostQuery } from '../services/post'

const Home = () => {
  const {data,isLoading,error}=  useGetPostQuery();
  const [totalPost,setTotalPost]=useState<IPost[]>([]);
  const [addPost]= useAddPostMutation();
  const [inputState,setInputState]=React.useState('');

  useEffect(()=>{
    if(data){
      setTotalPost(data);
    }
  },[data])
  const onAddPost=async()=>{
    const Props:IPost={
      title:inputState,
      body:inputState,
      userId:Math.random(),
      id:Math.random()

    };
    await addPost(Props);
    setTotalPost([...totalPost,Props]);


  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput
        value={inputState}
        onChangeText={(text)=>setInputState(text)}
        style={{width:200,height:40}}
      placeholder='Enter here'
      />

      <Button
      title='Set Post'
      onPress={onAddPost}
      
      />
      {
        isLoading?
        <Text>Loading...</Text>
        :
        totalPost?.map((item)=>(
         <Text>{item?.body}</Text>
        ))
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})