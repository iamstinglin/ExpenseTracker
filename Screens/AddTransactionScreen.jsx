import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddTransactionScreen = ({navigation, route}) => {

  console.log('route', route.name)
    
  return (
    <View>
        <Text> screen name : {route.name}</Text>
    </View>
  )
}

export default AddTransactionScreen

const styles = StyleSheet.create({})