import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RouteMap from '../components/RouteMap'
import UberTypes from '../components/UberTypes'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import HomeSearch from '../components/HomeSearch'

const SearchResult = () => {
    const route = useRoute();
    useEffect(()=>{
        console.log(route.params)
    },[])
    return (
        <View>
            <RouteMap Route = {route.params}/>
            <UberTypes/>
            <HomeSearch/>
            {/* <CovidMessage/> */}
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({})
