import React from 'react'
import { Text, FlatList, View, ScrollView } from 'react-native'
import Header from '../Components/Header';
import HomeCards from '../Components/HomeCards';
import theme from '../theme';

const MainCardData = [
    {
           'bgColor' : theme.bright_Income_Dim,
           'fontColor' : theme.bright_Income,
           'arrow' : 'arrow',
           'amount' : 12000,
           'title' : 'Income',
           'subtitle' : 'This month',
           'currency' : '$'
    },
    {
           'bgColor' : theme.bright_Expense_Dim,
           'fontColor' : theme.bright_Expense,
           'arrow' : 'arrow',
           'amount' : 12000,
           'title' : 'Expense',
           'subtitle' : 'This month',
           'currency' : '$'
    },
    {
           'bgColor' : theme.Bright_Balance_Dim,
           'fontColor' : theme.Bright_Balance,
           'arrow' : '',
           'amount' : 12000,
           'title' : 'Balance',
           'subtitle' : 'This month',
           'currency' : '$'
    },
    {
           'bgColor' : theme.Bright_Savings_Dim,
           'fontColor' : theme.Bright_Savings,
           'arrow' : 'arrow',
           'amount' : 12000,
           'title' : 'Savings',
           'subtitle' : 'Balance last month',
           'currency' : '$'
    }
]

const HomeScreen = ({navigation}) => {

    return (
        <View style={{flex : 1}}>
            <Header title={"Home"} />
            <ScrollView  style={{padding:16,  backgroundColor: theme.Dimmed_WHITE }} >
           <FlatList
           numColumns={'2'}
           data={MainCardData}
           renderItem={({item})=>{
            return(
                <HomeCards
                title={item.title}
                subtitle={item.subtitle}
                currency={item.currency}
                bgColor={item.bgColor}
                fontColor={item.fontColor}
                arrow={item.arrow}
                amount={item.amount}
                />
            )
           }}
           />
           </ScrollView>
        </View>
    )
}
 
export default HomeScreen;