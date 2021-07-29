import React, { useRef } from 'react'
import { StyleSheet, Text, View, Pressable  } from 'react-native'
import UberTypesRow from './UberTypesRow'
import typesData from '../types'
import RBSheet from "react-native-raw-bottom-sheet";
import { Feather } from '@expo/vector-icons';

const UberTypes = () => {
    const refRBSheet = useRef();
    const confirm = () => {
        //qx
    }

    return (
        <View >
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            dragFromTopOnly={true}
            closeOnPressMask={true}
            height = {350}
            customStyles={{
              container: {
                  backgroundColor: "#fff"
              },
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}
            animationType = {"fade"}
        >
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

        </RBSheet>
            <Pressable onPress={() => refRBSheet.current.open()} style={styles.SwipBtn}>
                <Feather name={'menu'} size={44}  color="black" />
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
    },
    SwipBtn: {
        margin: -32,
        alignSelf:"center",
        backgroundColor: "lightgrey",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderColor: "lightgrey",
        borderWidth: 2,
    }
    

})
