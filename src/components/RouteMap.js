import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'
import { Image } from 'react-native'
import cars from '../cars'
import MapViewDirections from 'react-native-maps-directions'
import { useEffect } from 'react'


const RouteMap = (Route) => {
    const origin = {latitude: Route.Route.orginPlace.details.geometry.location.lat,longitude: Route.Route.orginPlace.details.geometry.location.lng};
    const destination = {latitude:  Route.Route.destinationPlace.details.geometry.location.lat, longitude: Route.Route.destinationPlace.details.geometry.location.lng};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyABqm9vVCciw9M9iUhFregokkE7mI75Niw';

    useEffect(()=>{
        console.log("origin place : ",Route.Route.orginPlace.details.geometry.location.lat , " , ", Route.Route.orginPlace.details.geometry.location.lng)
        console.log("Destination place : ",Route.Route.destinationPlace.details.geometry.location.lat , " , ",Route.Route.destinationPlace.details.geometry.location.lng)
    },[])

    return (
        <View style={{height: '100%', backgroundColor:"#26BC50",justifyContent:"center",alignItems:"center"}}>
              <MapView 
                provider={"google"}
                style={styles.map}
                initialRegion={{
                latitude: 30,
                longitude: -8,
                latitudeDelta: 4,
                longitudeDelta: 4,
            
                }}
              >
                <MapViewDirections
                    lineDashPattern={[0]}
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor={"#26BC50"}
                />
                <Marker 
                    coordinate={{latitude: origin.latitude,longitude: origin.longitude}}/>
                <Marker 
                    coordinate={{latitude: destination.latitude,longitude: destination.longitude}}/>
                    
            </MapView>
        </View>
    )
}

export default RouteMap

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('screen').height*0.45,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    menu: {
        zIndex: 1,
        position: "absolute",
        top: 50,
        left: 20,
    },
    menu_icon: {
        backgroundColor: "white",
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgrey",
        borderWidth: 2,
    }
})