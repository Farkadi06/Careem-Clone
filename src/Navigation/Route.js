import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResult from '../screens/SearchResult'

const Route = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
                initialRouteName={'Home'}
                screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='DestinationSearch' component={DestinationSearch}/>
            <Stack.Screen name='SearchResult' component={SearchResult}/>
        </Stack.Navigator>
    )
}

export default Route

const styles = StyleSheet.create({})
