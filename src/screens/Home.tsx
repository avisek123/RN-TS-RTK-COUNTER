import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/appHooks'
import { useGetPokemonByNameQuery } from '../services/Pokemon'
const Home = () => {
 const auth= useAppSelector(state=>state.authSlicer?.isLoggedIn)
 const modalText = useAppSelector(state=>state.modalSlicer?.modalContent)
 const dispatch=  useAppDispatch();
 const [myModal,setMyModal]= React.useState(false)
 const [name, setName] = React.useState("");
 const {data,isLoading,error,isFetching}=  useGetPokemonByNameQuery(name);
 const [input,setInput]= React.useState('');
 
  const handlePress=()=>{
    if(!input) 
    return Alert.alert("Please enter a name");
    console.log("input",input)
    setName(input)
    setInput('')
    

  }   
console.log(isLoading)

   
         
  return (
    <SafeAreaView
    style={{
      flex:1
    }}
    >
      <View
      style={{
        padding:20
      }}
      >
        <Text
        style={{
          fontSize:17,
          fontWeight:"bold",
          color:'#000'
        }}
        >Enter a Pokemon Name</Text>
        <TextInput
        placeholder='Enter a Pokemon Name'
        style={{
          borderWidth:1,
          borderColor:'#000',
          padding:10,
          marginTop:10,
          marginBottom:10
        }}
        value={input}
        onChangeText={text=>setInput(text)}
        
        />
       <View
       style={{ 
         marginTop:20
       }}
       >
       <Button
        title="Search"
        onPress={handlePress}
      
          />
       </View>     
   
      <View
      style={{
        alignSelf:'center',
        marginTop:70
      }}
      >
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isFetching ? (
        <Text>Loading...</Text>
      ) : data ? (
        <>
          <Image
          source={{uri:data.sprites.front_shiny}}
          style={{
            width:200,
            height:200,
          }}
          
          />
          <Text
          style={{
            textAlign:'center',
          }}
          >{data?.species?.name}</Text>
        
        </>
      ) : <Text>No Data</Text>}

        </View>

      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})