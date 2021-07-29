import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import UberTypesRow from './UberTypesRow'
import typesData from '../types'

const UberTypes = () => {

    const confirm = () => {
        console.log('confirm')
    }

    return (
        <View >
            {typesData?.map(type => <UberTypesRow
                key ={type.id}
                UberImage = {type.type}
                UberType = {type.type}
                UberTime = {type.duration}
                Price = {type.price}
                Passagers = " 3"/>)}

            <Pressable onPress={confirm} style={styles.confirmBtn}>
                <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>

        
    )
}

export default UberTypes

const styles = StyleSheet.create({
    confirmBtn: {
        display:'flex',
        backgroundColor: '#26BC50',
        padding: 10,
        margin:15,
        borderRadius:5
    }

})
