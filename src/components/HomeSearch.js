import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feature } from '@expo/vector-icons'
import { AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons'


const HomeSearch = () => {
    return (
        <View>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={"clockcircle"} size={16} color={'#6e6e6e'}/>
                    <Text color={'#6e6e6e'}>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#6e6e6e'}/>
                </View>
            </View>

            {/* Input Boxs */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={"clockcircle"} size={16} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Hay Mohamadi, Agadir</Text>
            </View>
            <View style={styles.row}>
                <View style={[styles.iconContainer,{backgroundColor: '#48a23f'}]}>
                    <Entypo name={"home"} size={16} color={'#fff'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin:10,
        borderRadius:10,
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    inputText: {
        fontSize:20,
        fontWeight:'600',
        color: "#6e6e6e",
        marginLeft:10
        
    },
    timeContainer: {
        backgroundColor:"#fff",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:100,
        borderRadius:30,
        margin:10,
        padding:10,
    },
    row: {
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        padding:10,
        borderBottomWidth: 1,
        borderColor: "#dbdbdb"
    },
    iconContainer:{
        backgroundColor:'#6e6e6e',
        padding:10,
        marginRight:20,
        borderRadius:25

    },
    destinationText:{
        fontWeight: "500",
        fontSize:16,
    }
})
