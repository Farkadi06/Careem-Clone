import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const UberTypesRow = ({UberImage, UberType, UberTime, Price, Passagers}) => {

    const getImage = () => {
        if (UberImage === 'UberX') {
          return require('../assets/images/UberX.jpeg');
        }
        if (UberImage === 'Comfort') {
          return require('../assets/images/Comfort.jpeg');
        }
        return require('../assets/images/UberXL.jpeg');
      }

    return (
        <View style={styles.container}>
            
        <Image
            style={styles.Image}
            source={
                getImage()
            }/>
        
        <View >
            <Text style={styles.UberType}>{UberType}</Text>
            <Ionicons name={'time'} size={14} style={styles.UberTime}>{UberTime}</Ionicons>
        </View>
        <View >
            <Ionicons name={'pricetag'} style={styles.UberPrice}> {Price}</Ionicons>
            <Ionicons name={'person'} size={14} style={styles.Passagers}> {Passagers}</Ionicons>
        </View>
    </View>
    )
}

export default UberTypesRow

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    Image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
        
    },
    UberType:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5
    },
    UberTime: {
        color: '#b0b0b0',
        fontWeight: '500'
    },
    UberPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#26BC50',
        marginBottom:5
    },
    Passagers: {
        color: '#b0b0b0',
        fontWeight: '500'
    }
})
