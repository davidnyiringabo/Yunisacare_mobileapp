import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import arrow from "../assets/images/right-arrow.png"

const ShiftModule = ({hospital, date, address, time, payrate, accept})=>{
    return(
        <View style={styles.singleShiftContainer}>
            <Text style={styles.text}>Hospital: {hospital}</Text>
            <Text style={styles.text}>Date: {date}</Text>
            <Text style={styles.text}>Address: {address}</Text>
            <Text style={styles.text}>Time Duration: {time}</Text>
            <Text style={styles.text}>Pay rate: {payrate}</Text>

            {accept && <TouchableOpacity style={{backgroundColor: "#000", width: "60%", height: 22, borderRadius: 3}}><Text style={{fontFamily: "Poppins-Light", color: "#FFF", fontSize: 10, paddingTop: 4,textAlign: "center"}}>Mark as complete and pay <Image source={arrow}/> </Text></TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    singleShiftContainer:{
        width: "100%",
        height: 120,
        backgroundColor: "#e870c4",
        marginTop: 5,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontFamily: "Poppins-Light",
        color: "#FFF",
        fontSize: 11,
        textAlign: "left",
        width: "60%"
    }
})
export default ShiftModule