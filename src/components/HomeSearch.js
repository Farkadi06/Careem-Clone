import React, { useRef } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { AntDesign,Entypo,MaterialIcons,Feather } from '@expo/vector-icons'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const HomeSearch = () => {
    const refRBSheet2 = useRef();
    const navigation = useNavigation();

    const goSearch = () => {
        navigation.navigate('DestinationSearch');
    }

    return (
        <View>
            <RBSheet 
                ref={refRBSheet2}
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
                {/* Input Box */}
                <Pressable style={styles.inputBox} onPress={goSearch}>
                    <Text style={styles.inputText}>Where To?</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name={"clockcircle"} size={16} color={'#6e6e6e'}/>
                        <Text color={'#6e6e6e'}>Now</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#6e6e6e'}/>
                    </View>
                </Pressable>

                {/* Input Boxs */}
                <View style={styles.row} >
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
            </RBSheet>
            
            <Pressable onPress={() => refRBSheet2.current.open()} style={styles.SwipBtn}>
                <Feather name="search" size={30} color="#26BC50" />
            </Pressable>
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
    },
    SwipBtn: {
        marginTop: -100,
        marginLeft:110,
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
