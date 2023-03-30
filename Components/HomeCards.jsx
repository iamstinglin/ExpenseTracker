import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../theme'
import  MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get("screen")

const HomeCards = ({bgColor, fontColor, arrow, title, subtitle, currency, amount}) => {

  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.Container, {backgroundColor : bgColor}]}>
      <View style={styles.Row1}>
        <View style={styles.Titles}>
            <Text style={styles.Heading}>{title}</Text>
            <Text style={styles.Subtitle} >{subtitle}</Text>
        </View>
        {arrow ? <View style={styles.IconStyle}>
            <MaterialCommunityIcon name='chevron-right' size={18} color='white' />
        </View> : ''}
      </View>
      <Text style={[styles.Amount, { color : fontColor}]}>{`${currency}${" "}${amount}`}</Text>
    </TouchableOpacity>
  )
}

export default HomeCards;

const styles = StyleSheet.create({
    Container : {
        padding : 14,
        width : 0.436* width,
        height : 0.144* height,
        marginRight : 16,
        marginBottom : 16,
        borderRadius : 5,
        elevation : 1
    },
    Row1 : {
        width:'100%',
        flexDirection : 'row',
        backgroundColor : 'transparent',
        justifyContent : 'space-between'
    },
    Titles : {

    },
    Heading : {
        fontFamily : 'Nunito-SemiBold',
        fontSize : 16,
        color : theme.Dimmed_BLACK
    },
    Subtitle : {
        fontFamily : 'Nunito-Regular',
        fontSize : 12,
        color : theme.Bright_TextGrey,
        marginTop : 4
    },
    IconStyle : {
        width : 20,
        height : 20,
        backgroundColor : 'rgba(0, 0, 0, 0.14)',
        borderRadius: 50,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    Amount : {
        fontFamily : 'Nunito-ExtraBold',
        fontSize : 22,
        marginTop : 16
    }
    
})