import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeMap from '../components/HomeMap'
import HomeSearch from '../components/HomeSearch'
import UberTypes from '../components/UberTypes'

const HomeScreen = () => {
    return (
        <View>
            <HomeMap/>
            {/* <CovidMessage/> */}
            <HomeSearch/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
