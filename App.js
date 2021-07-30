import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import NavigationRoot from './src/Navigation/NavigationRoot';

export default function App() {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Careem Clone Need access to your location",
          message:
            "Careem Clone Need access to your location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use get the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(()=>{
    requestCameraPermission();
  },[])
  return (
    <View style={styles.container}>
        <NavigationRoot/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
