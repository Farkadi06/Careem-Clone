import React, { useRef } from 'react'
import { StyleSheet, Text, View, Pressable  } from 'react-native'
import UberTypesRow from './UberTypesRow'
import typesData from '../types'
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign, Entypo } from '@expo/vector-icons';

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
                <AntDesign name="car" size={30} color="#26BC50" />
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
        marginTop: -100,
        marginLeft:200,
        right: 0,
        backgroundColor: "white",
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#26BC50",
        borderWidth: 2,
    }
    

})
