import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import UberTypesRow from './UberTypesRow'


const UberTypes = () => {
    return (
        <View >
            <UberTypesRow
                UberImage = "../assets/images/UberX.jpeg"
                UberType = "UberX"
                UberTime = " 11:05 - 12-10 am"
                Price = " 12 $"
                Passagers = " 3"/>
        </View>
    )
}

export default UberTypes

const styles = StyleSheet.create({
   

})
