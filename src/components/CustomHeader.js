import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import * as Font from 'expo-font';

// Import the Poppins font
import PoppinsRegular from '../assets/fonts/Poppins-Bold.ttf';
import { View } from 'react-native';
import { Image } from 'react-native';
import personImage from "../assets/images/personImage.jpeg"
import menuIcon from "../assets/images/menuu.png"

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  headerContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#e870c4"
  }
});

const CustomHeader = ({ title }) => {

  return(
    <View style={styles.headerContainer}>
        <Image source={personImage} style={{width: 40, height: 40, borderRadius: 20}}/>
        <Text style={styles.headerTitle}>{title}</Text>
        <Image source={menuIcon} style={{width: 40, height: 40}}/>
    </View>
  )
};

export default CustomHeader;