import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { 
    HomeScreen,
    WalletsScreen,
    TransactionsScreen,
    TransactionDetailsScreen,
    IncomeScreen,
    ExpenseScreen,
    ChooseCategoryScreen,
    SavingsScreen,
    MenuScreen,
    AddTransactionScreen
 } from '../Screens/AllScreensExports';


const Stack = createStackNavigator(); 

const FromHomeScreen = () => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} > 
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

         <Stack.Screen
          name="IncomeScreen"
          component={IncomeScreen}
        />
         <Stack.Screen
          name="AddTransactionScreen"
          component={AddTransactionScreen}
        />
         <Stack.Screen
          name="ExpenseScreen"
          component={ExpenseScreen}
        />
         <Stack.Screen
          name="SavingsScreen"
          component={SavingsScreen}
        />
         <Stack.Screen
          name="ChooseCategoryScreen"
          component={ChooseCategoryScreen}
        />

        </Stack.Navigator>

    );
}
const FromWalletsScreen = () => {
    return (
      <Stack.Navigator initialRouteName="WalletsScreen" screenOptions={{ headerShown: false }} > 

        <Stack.Screen
          name="WalletsScreen"
          component={WalletsScreen}
        />

         <Stack.Screen
          name="AddTransactionScreen"
          component={AddTransactionScreen}
        />

         <Stack.Screen
          name="ChooseCategoryScreen"
          component={ChooseCategoryScreen}
        />


        </Stack.Navigator>

    );
}
const FromTransactionsScreen = () => {
    return (
      <Stack.Navigator initialRouteName="TransactionsScreen"  screenOptions={{ headerShown: false }} > 

        <Stack.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
        />

         <Stack.Screen
          name="AddTransactionScreen"
          component={AddTransactionScreen}
        />

         <Stack.Screen
          name="ChooseCategoryScreen"
          component={ChooseCategoryScreen}
        />

         <Stack.Screen
          name="TransactionDetailsScreen"
          component={TransactionDetailsScreen}
        />


        </Stack.Navigator>

    );
}
const FromMenuScreen = () => {
    return (
      <Stack.Navigator initialRouteName="MenuScreen" screenOptions={{ headerShown: false }} > 

         <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
        />
         <Stack.Screen
          name="AddTransactionScreen"
          component={AddTransactionScreen}
        />
         <Stack.Screen
          name="ChooseCategoryScreen"
          component={ChooseCategoryScreen}
        />

        </Stack.Navigator>

    );
}

export { FromHomeScreen, FromWalletsScreen, FromTransactionsScreen, FromMenuScreen };

