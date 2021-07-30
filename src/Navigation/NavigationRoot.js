import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'



const NavigationRoot = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator 
                    initialRouteName={'Home'}
                    screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='DestinationSearch' component={DestinationSearch}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoot

const styles = StyleSheet.create({})