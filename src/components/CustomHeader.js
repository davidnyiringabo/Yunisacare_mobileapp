import React from 'react';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import PoppinsRegular from '../assets/fonts/Poppins-Bold.ttf';
import { View } from 'react-native';
import { Image } from 'react-native';
import personImage from "../assets/images/personImage.jpeg"
import menuIcon from "../assets/images/menuu.png"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

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
    backgroundColor: "#e870c4",
    position: 'relative'
  },
  menuContainer:{
    position: 'absolute',
    // height: height / 2,
    height: 60,
    width: 200,
    zIndex: 999,
    backgroundColor: "#e697ce",
    right: 0,
    top: 80,
    borderBottomLeftRadius: 10,
    display: "flex",
    paddingLeft: 20,
    paddingTop: 20

  }
});

const CustomHeader = ({ title, navigation }) => {

  const [showModel, setShowModel] = useState(false)

  return(
    <View style={styles.headerContainer}>
        <TouchableOpacity>
        <Image source={personImage} style={{width: 40, height: 40, borderRadius: 20}}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={()=> setShowModel(!showModel)}>
          <Image source={menuIcon} style={{width: 40, height: 40}}/>
        </TouchableOpacity>

        {showModel && (
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <Text style={{fontFamily: "Poppins-Bold"}}>Signout</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
  )
};

export default CustomHeader;