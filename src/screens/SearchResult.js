import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RouteMap from '../components/RouteMap'
import UberTypes from '../components/UberTypes'

const SearchResult = () => {
    return (
        <View>
            <RouteMap/>
            <UberTypes/>
            {/* <CovidMessage/> */}
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({})
