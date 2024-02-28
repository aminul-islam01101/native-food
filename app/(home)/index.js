import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import React, { useEffect, useState } from "react";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const index = () => {
   const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location ..."
  );


  const CheckIfLocationEnabled = async () => {
    try {
      let enabled = await Location.hasServicesEnabledAsync();
  
      if (!enabled) {
        Alert.alert(
          "Location Services not enabled",
          "Please enable your location services to continue",
          [{ text: "OK" }],
          { cancelable: false }
        );
      } else {
        setLocationServicesEnabled(true);
      }
    } catch (error) {
      console.error("Error checking location services:", error);
    }
  };
  
  const GetCurrentLocation = async () => {
    try {
   
      const { status } = await Location.requestBackgroundPermissionsAsync();

      const result = await Location.requestForegroundPermissionsAsync();

       
      if (status !== 'granted') {
        Alert.alert(
          'Permission not granted',
          'Allow the app to use the location service',
          [{ text: 'OK' }],
          { cancelable: false }
        );
        return;
      }
     
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      if (!location) {
        Alert.alert('Location not available', 'Failed to get current location', [
          { text: 'OK' },
        ]);
        return;
      }
 
  
      const { coords } = await Location.getCurrentPositionAsync();
    
  
      if (coords) {
        const { latitude, longitude } = coords;
  
        const response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
  
        const address = await LocationGeocoding.reverseGeocodeAsync({
          latitude,
          longitude,
        });
  
        const streetAddress = address[0].name;
  
        for (let item of response) {
          const address = `${item.name}, ${item?.postalCode}, ${item?.city}`;
          setDisplayCurrentAddress(address);
        }
      }
    } catch (error) {
      console.error('Error getting current location:', error.message);
      Alert.alert('Location Error', 'Failed to get current locations', [
        { text: 'OK' },
      ]);
    }
  };
  
    useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, [locationServicesEnabled]);
  console.log("my address", displayCurrentAddress,);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
    <View  style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 10,
        }}>
            <Octicons name="location" size={24} color="#E52850" />
            <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
            {displayCurrentAddress}
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>S</Text>
        </Pressable>
    </View>
    <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#C0C0C0",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 11,
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <TextInput placeholder="Search for food, hotels" />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
  </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})