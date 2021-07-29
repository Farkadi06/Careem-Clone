import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CovidMessage from '../components/CovidMessage'
import HomeMap from '../components/HomeMap'
import HomeSearch from '../components/HomeSearch'
import UberTypes from '../components/UberTypes'

const HomeScreen = () => {
    return (
        <View>
            <HomeMap/>
            <UberTypes/>
            {/* <CovidMessage/>
            <HomeSearch/> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
