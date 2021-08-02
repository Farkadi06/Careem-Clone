import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlaceRow from '../components/PlaceRow'
import { useNavigation } from '@react-navigation/native'

const DestinationSearch = () => {

    const [orginPlace,setOrginPlace] = useState(null)
    const [destinationPlace,setDestinationPlace] = useState(null)
    const Navigation = useNavigation();

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 30.48748087805257, lng: -8.873698518403405 } },
      };
      const workPlace = {
        description: 'Work - EHTP - Casablanca',
        geometry: { location: { lat: 33.54711313127219, lng: -7.650132177734675 } },
      };

    useEffect(()=>{
        if(orginPlace && destinationPlace){
            console.log("Redirect to results")
            Navigation.navigate('SearchResult')
        }
    },[orginPlace, destinationPlace])

    return (
            <SafeAreaView style={{backgroundColor: "white"}}>
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding": "height"}
                style={styles.container}
                
                >
                <View style={styles.container}>
                <GooglePlacesAutocomplete
                        placeholder='Current Location'
                        currentLocationLabel= 'Current Location'
                        currentLocation={true}
                        suppressDefaultStyles
                        enablePoweredByContainer={false}
                        styles={{
                            container: {
                                position: 'absolute',
                                top: 0,
                                left: 10,
                                right: 10,
                            },
                            listView: {
                                position: 'absolute',
                                top: 105
                            },
                            separator: styles.separator,
                            textInput: {
                                ...styles.TextInput,
                                color: '#26BC50'
                            },
                        }}
                        renderRow={(data)=> <PlaceRow data = {data}/>}
                        renderDescription= {(data)=> data.description || data.vicinity}
                        predefinedPlaces={[homePlace, workPlace]}
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

                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        suppressDefaultStyles
                        enablePoweredByContainer={false}
                        styles={{
                            container: {
                                position: 'absolute',
                                top: 60,
                                left: 10,
                                right: 10,
                            },
                            separator: styles.separator,
                            textInput: styles.TextInput,
                            poweredContainer: styles.poweredContainer
                        }}
                        renderRow={(data)=> <PlaceRow data = {data}/>}
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
                    {/* Circl near Origin input */}
                    <View style={styles.circle}/>

                    {/* Bottom line */}
                    <View style={styles.line}/>

                    {/* Circl near destination input */}
                    <View style={styles.square}/>
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
        backgroundColor:"#fff",
        height:"100%"
    },
    TextInput: {
        backgroundColor: '#eee',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
        marginLeft: 20
    },
    poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,},
    separator: {
            backgroundColor: '#efefef',
            height: 1,
    },
    circle: {
        width: 7,
        height: 7,
        backgroundColor: '#26BC50',
        position: 'absolute',
        top: 20,
        left: 10,
        borderRadius: 5,
        zIndex: 1
    },
    line: {
        width: 1,
        height: 47,
        backgroundColor: 'black',
        position: 'absolute',
        top: 30,
        left: 12.5,
        borderRadius: 5
    },
    square: {
        width: 7,
        height: 7,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 10
    }
})
