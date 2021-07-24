import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const DestinationSearch = () => {

    const [orginPlace,setOrginPlace] = useState(null)
    const [destinationPlace,setDestinationPlace] = useState(null)

    useEffect(()=>{
        if(orginPlace && destinationPlace){
            console.log("Redirect to results")
        }
    },[orginPlace, destinationPlace])

    return (
            <SafeAreaView style={{backgroundColor: "white"}}>
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding": "height"}
                style={styles.container}
                keyboardVerticalOffset = { 100}
                >
                <View style={styles.container}>
                    <GooglePlacesAutocomplete
                        placeholder='From'
                        styles={{
                            textInput: styles.TextInput,
                            poweredContainer: styles.poweredContainer
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            setOrginPlace({data,details})
                            console.log(data, details);
                        }}
                        fetchDetails
                        query={{
                            key: 'AIzaSyABqm9vVCciw9M9iUhFregokkE7mI75Niw',
                            language: 'en',
                        }}
                        />
                     <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={{
                            textInput: styles.TextInput,
                            poweredContainer: styles.poweredContainer
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            setDestinationPlace({data,details})
                            console.log(data, details);
                        }}
                        fetchDetails
                        query={{
                            key: 'AIzaSyABqm9vVCciw9M9iUhFregokkE7mI75Niw',
                            language: 'en',
                        }}
                        />
                </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
        padding:10,
        marginTop:20,
        backgroundColor:"#eee",
        height:"100%"
    },
    TextInput: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
    },
    poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,}
})
