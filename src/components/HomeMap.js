import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'

const HomeMap = ({refRBSheet}) => {
    return (
        <View style={{height: 300, backgroundColor:"#26BC50",justifyContent:"center",alignItems:"center"}}>
              <MapView 
                provider={"google"}
                style={styles.map}
                initialRegion={{
                latitude: 30.472863493373456,
                longitude: -8.877082002834296,
                latitudeDelta: 0.045,
                longitudeDelta: 0.045,
                }}
      /> 
        </View>
    )
}

export default HomeMap

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
