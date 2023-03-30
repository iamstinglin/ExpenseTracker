import React, { useEffect, useRef } from 'react';
import 'react-native-gesture-handler';
import { Dimensions, Animated, TouchableOpacity, View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../theme';
import { FromHomeScreen, FromWalletsScreen, FromTransactionsScreen, FromMenuScreen } from './Nestednavigations'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBars, faWallet, faCirclePlus, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

const getWidth = () => {
  let width = Dimensions.get("window").width
  width = width - 60
  return width / 5
}
function GlobalNavigation() {

  const offsetAnimation = useRef(new Animated.Value(0)).current;

  return (

      <NavigationContainer>
      <Tab.Navigator
        initialRouteName='FromHomeScreen'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 16,
            marginHorizontal: 16,
            height: 80,
            zIndex: 1,
            borderRadius: 8,
            paddingHorizontal: 16,
          },
        }}
        >
        <Tab.Screen
          name='FromHomeScreen'
          component={FromHomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (<FontAwesomeIcon size={20} color={focused ? theme.Bright_PRIMARY : 'grey'} icon={faHouse} />)
          }}
          listeners={(Navigation) => {
            {
              Animated.spring(offsetAnimation, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          }}

        />

        <Tab.Screen
          name='FromWalletsScreen'
          component={FromWalletsScreen}
          options={{
            tabBarIcon: ({ focused }) => (<FontAwesomeIcon size={20} color={focused ? theme.Bright_PRIMARY : 'grey'} icon={faWallet} />)
          }}
          listeners={(Navigation) => {
            {
              Animated.spring(offsetAnimation, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          }}

        />
        <Tab.Screen
          name='AddIcon'
          component={AddIcon}
          listeners={()=>({
            tabPress : (e) => e.preventDefault()
          })}
          options={{
            tabBarIcon: () => (
              <TouchableOpacity activeOpacity={0.8} >
                <View style={{
                backgroundColor: 'white',
                width : 55,
                height : 55,
                borderRadius: 30,
                zIndex : 2,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
                
              }} >
                <FontAwesomeIcon color={theme.Bright_PRIMARY} size={56} icon={faCirclePlus} />
                </View>
              </TouchableOpacity>
            )
          }}

        />
        <Tab.Screen
          name='FromTransactionsScreen'
          component={FromTransactionsScreen}
          options={{
            tabBarIcon: ({ focused }) => (<FontAwesomeIcon size={20} color={focused ? theme.Bright_PRIMARY : 'grey'} icon={faArrowRightArrowLeft} />)
          }}
          listeners={(Navigation) => {
            {
              Animated.spring(offsetAnimation, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          }}

        />
        <Tab.Screen
          name='FromMenuScreen'
          component={FromMenuScreen}
          options={{
            tabBarIcon: ({ focused }) => (<FontAwesomeIcon size={20} color={focused ? theme.Bright_PRIMARY : 'grey'} icon={faBars} />)
          }}
          listeners={(Navigation) => {
            {
              Animated.spring(offsetAnimation, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          }}

        />
      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 16,
        height: 5,
        left: 36,
        borderRadius: 50,
        backgroundColor: theme.Bright_PRIMARY,
        position: 'absolute',
        bottom: 91,
        transform: [
          { translateX: offsetAnimation }
        ]

      }}></Animated.View>

    </NavigationContainer>
  );
}

export default GlobalNavigation;

export const AddIcon = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  );
}


