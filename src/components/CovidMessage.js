import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur cum ea amet commodi necessitatibus in facilis blanditiis.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovidMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#48A23F',
        padding:10,
        marginTop:-10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        zIndex:1
    },
    title: {
        color:'#fff',
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:10

    },
    text: {
        color:'#fff',
        fontSize:15,
        marginBottom:10

    },
    learnMore: {
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    }
})
