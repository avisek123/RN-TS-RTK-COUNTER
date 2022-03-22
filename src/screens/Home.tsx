import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/appHooks'
import { addTodo,clearTodo,removeTodo, submitTodo, updateCompleteTodo, updateTodo } from '../features/todo/todoSlice';

const Home = () => { 
 const dispatch=  useAppDispatch();
 const [update,setUpdate]=React.useState(false)
const todoList= useAppSelector(state => state.todoSlicer.todos);
const todoState= useAppSelector(state => state.todoSlicer.todoItems);


  const handleSubmit=()=>{
  dispatch(clearTodo())
   dispatch(
    addTodo({
      id:Math.random(),
      text:todoState
   
    })
    
   )
  }
  const handleUpdate=()=>{
    setUpdate(false)
    dispatch(clearTodo())
    dispatch(updateCompleteTodo({
      id:Math.random(),
      text:todoState
    })
    )

  }
  return (
    <SafeAreaView style={{flex:1}}>
     <ScrollView>
       <Text
       style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
       }}
       >TODO APP</Text>
       <TextInput
       value={todoState}
       onChangeText={(text)=>dispatch(submitTodo(text))}
       placeholder='Enter todo'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
       
       />
     {
       update ?
       <TouchableOpacity

       onPress={()=>handleUpdate()}
       style={{
          backgroundColor:'rgb(0, 204, 255)',
          height: 40,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',

       }}
       >
         <Text>UPDATE</Text>
       </TouchableOpacity>
       
       :
       <TouchableOpacity

       onPress={()=>handleSubmit()}
       style={{
          backgroundColor:'rgb(0, 204, 255)',
          height: 40,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',

       }}
       >
         <Text>ADD</Text>
       </TouchableOpacity>
     }
       <Text
       style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,

       }}
       >
TODO ITEM
       </Text>
        {todoList.map(todo=>(
          <View
          key={todo.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
          >
            <Text>{todo.text}</Text>
            <TouchableOpacity
          onPress={()=>{
            dispatch(updateTodo(todo))
            setUpdate(true)
          }}
           >
             <Text
             style={{
               color:'green'
             }}
             >
               E
             </Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>dispatch(removeTodo(todo.id))}
           >
             <Text
             style={{
               color:'red'
             }}
             >
               X
             </Text>
           </TouchableOpacity>
          </View>
        ))}

     </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})