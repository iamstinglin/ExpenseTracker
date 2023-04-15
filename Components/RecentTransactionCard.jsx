import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../theme'

const { width, height } = Dimensions.get("screen")

const RecentTransactionCard = ({ type, wallet, amount, transactionName, note, currency, date }) => {

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.Container}>
       <View style={[styles.indicator,{ 
            backgroundColor : 'blue'
        }]} />
       <View style={styles.left}>
       <View style={styles.row1}>
        <Text style={styles.title}>{transactionName}</Text>
        <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
        </View>
       </View>
       <Text numberOfLines={1} style={styles.note}>{note}</Text>
       </View>
       <Text style={[styles.Amount,{ color : type == 'Expense' ? theme.bright_Expense  : theme.bright_Income
                                             
                                                    }]}>{`${currency}${" "}${amount}`}</Text>

    </TouchableOpacity>
  )
}

export default RecentTransactionCard;

const styles = StyleSheet.create({
    Container : {
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 8,
        height : 0.1* height,
        borderRadius : 5,
        overflow : 'hidden',
        borderBottomWidth : 1,
        borderBottomColor : theme.Bright_BackdropWhite
    },
    indicator : {
        width : 20,
        height : 20,
        borderRadius : 50,
        position : 'absolute',
        right : -8,
        top : -8
    },
    left : {
        backgroundColor : 'transparent',
    },
    row1 : {
        flexDirection : 'row',
        alignItems : 'center',

    },
    title : {
        fontFamily : 'Nunito-Medium',
        fontSize : 16,
        color : theme.Dimmed_BLACK,
        marginRight : 8

    },
    dateContainer : {

        paddingVertical : 4,
        paddingHorizontal : 10,
        backgroundColor : theme.Bright_BackdropWhite,
        borderRadius : 8
    },
    date : {
        fontFamily : 'Nunito-Regular',
        fontSize : 12,
        color : theme.Bright_TextGrey,
    },
    note : {
        fontFamily : 'Nunito-Regular',
        fontSize : 12,
        color : theme.Bright_TextGrey,
        marginTop : 8,
        width : 0.48*width
    },
    Amount : {
        marginLeft : 24,
        fontFamily : 'Nunito-Bold',
        fontSize : 16,
    }
})