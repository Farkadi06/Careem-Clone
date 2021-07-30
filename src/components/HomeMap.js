import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'
import { Image } from 'react-native'
import cars from '../cars'

const HomeMap = ({refRBSheet}) => {
    
    const getImage = (UberImage) => {
        if (UberImage === 'UberX') {
          return require('../assets/images/top-UberX.png');
        }
        if (UberImage === 'Comfort') {
          return require('../assets/images/top-Comfort.png');
        }
        return require('../assets/images/top-UberXL.png');
      }

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
                  {
                      cars.map(car => (
                        <Marker 
                        key={car.id}
                        coordinate={{latitude: car.latitude,longitude: car.longitude}}>
                            <Image 
                                resizeMode={'contain'} 
                                style={{width:50, height:50, resizeMode: 'contain', transform: [{
                                    rotate: `${car.heading}deg`
                                }]}}
                                source={getImage(car.type)}
                                />
                        </Marker>
                      ))
                  }
              
            </MapView>
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
