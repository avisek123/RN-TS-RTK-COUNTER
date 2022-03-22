import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'
import Home from './src/screens/Home'

const App = () => {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})