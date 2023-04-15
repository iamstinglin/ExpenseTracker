import React from 'react'
import { Text, FlatList, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Header from '../Components/Header';
import HomeCards from '../Components/HomeCards';
import RecentTransactionCard from '../Components/RecentTransactionCard';
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
const RecentTransactions = [
    {
           'type' : 'Expense',
           'wallet' : 1,
           'amount' : 12000,
           'transactionName' : 'Medical',
           'note' : 'This is the note that is entered by the user',
           'currency' : '$',
           'date' : '06-04-2023'
    },
    {
           'type' : 'Income',
           'wallet' : 2,
           'amount' : 8000,
           'transactionName' : 'Freelance',
           'note' : 'This is the note that is entered by the user',
           'currency' : '$',
           'date' : '12-07-2024'
    },
    {
           'type' : 'Expense',
           'wallet' : 1,
           'amount' : 12000,
           'transactionName' : 'Medical',
           'note' : 'This is the note that is entered by the user',
           'currency' : '$',
           'date' : '06-04-2023'
    },
    {
           'type' : 'Income',
           'wallet' : 2,
           'amount' : 8000,
           'transactionName' : 'Freelance',
           'note' : 'This is the note that is entered by the user',
           'currency' : '$',
           'date' : '12-07-2024'
    },
    {
        'type' : 'Expense',
        'wallet' : 1,
        'amount' : 12000,
        'transactionName' : 'Medical',
        'note' : 'This is the note that is entered by the user',
        'currency' : '$',
        'date' : '06-04-2023'
 },

]

const { width, height } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {

    return (
        <View style={{flex : 1}}>
            <Header title={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}  style={{padding:16,  backgroundColor: theme.Dimmed_WHITE }} >
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
           <View style={styles.RecentTransactionsContainer}>
                <Text style={styles.heading}>Recent Transactions</Text>
                <FlatList

                     data={RecentTransactions}
                     renderItem={({item})=>{
                        return(
                            <RecentTransactionCard
                            type={item.type}
                            wallet={item.wallet}
                            amount={item.amount}
                            transactionName={item.transactionName}
                            note={item.note}
                            currency={item.currency}
                            date={item.date}
                            />
                            )}}/>
           </View>
           </ScrollView>
        </View>
    )
}
 
export default HomeScreen;

const styles = StyleSheet.create({
    RecentTransactionsContainer : {
        width : '100%',
        height : 0.636*height,
        backgroundColor : theme.WHITE,
        borderRadius : 5,
        marginBottom : 120,
        padding : 16
    },
    heading : {
        fontFamily : 'Nunito-Bold',
        fontSize : 16,
        color : theme.Dimmed_BLACK,
        marginBottom : 16,
    }
})