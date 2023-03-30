import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../theme'
import  MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const { width, height } = Dimensions.get("screen")


const Header = ({onPress, title, arrow}) => {
  return (
    <View style={styles.Container}>
        { arrow ? <TouchableOpacity style={styles.IconStyle} onPress={onPress} activeOpacity={0.9}>
        <MaterialCommunityIcon name='chevron-left' size={24} color={theme.Dimmed_BLACK} /> 
        </TouchableOpacity> : ''}
      <Text style={styles.Title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Container : {
        width : width,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        height : 64,
        backgroundColor :theme.Bright_SECONDARY
    },
    Title : {
        marginLeft : 16,
        fontFamily : 'Nunito-Bold',
        fontSize : 18,
        color : theme.Dimmed_BLACK
    },
    IconStyle : {
        backgroundColor : 'transparent',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 16,
        width : 30,
        height : 30,
    }
})