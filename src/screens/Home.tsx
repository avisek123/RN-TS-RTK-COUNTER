import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/appHooks';

const Home = () => {
   const sateValue =  useAppSelector((state)=>state.counter.value);
   
 const dispatch=  useAppDispatch();
  return (
    <View>
      <Text>{sateValue}</Text>
      <Button
      title='increment'
        onPress={()=>dispatch(increment())}
      
      />
       <Button
      title='Decrement'
    

        onPress={()=>dispatch(decrement())}
      
      />
       <Button
      title='Increment By 7'
    

        onPress={()=>dispatch(incrementByAmount(7))}
      
      />
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    primaryButton: {
        backgroundColor: '#FF0017',
        marginTop:20
      },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
      }
})