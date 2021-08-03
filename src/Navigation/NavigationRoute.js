import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Route from './Route'

const Stack = createStackNavigator();
const NavigationRoute = () => {
    
    return (
        <NavigationContainer >
            <Route/>
        </NavigationContainer>
    )
}

export default NavigationRoute

const styles = StyleSheet.create({})
