import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import doctorsImage from "../../assets/images/doctors.png"
import { ScrollView } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const RegisterScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{display: "flex", alignItems: "center"}}>
                <Text style={{fontFamily: "Poppins-Bold", fontSize: 22, textAlign: "center",paddingTop: 40, marginBottom: -6}}>Welcome to Yunisa care flex.</Text>
                <Text style={{fontFamily: "Poppins-Light",  textAlign: "center", marginBottom: 290}}>Register your account and get started</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("registercaregiver")}>
                    <Text style={styles.buttonText}>Register as a caregiver</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("registerhospital")}>
                    <Text style={styles.buttonText}>Register as a Hospital/caregiving home</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{textAlign: "center", margin: 60}}>
                <Text style={{color: "#fff", fontFamily: "Poppins-Bold", fontSize: 13}}>Forgot password ?</Text>
            </TouchableOpacity>

            <Text style={styles.linkText}>Already have an account? <Text style={{color: "#1a85d6"}} onPress={()=> navigation.navigate("login")}>Sign in</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: width,
        height: height,
        alignItems:"center"
    },
    text:{
        fontFamily: "Poppins-Bold",
        textAlign: "center",
        marginTop: 20
    },
    button:{
        width: width - 130,
        height: 40,
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "#1a85d6",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    buttonText:{
        color: "#FFF",
        fontFamily: "Poppins-Bold",
        fontSize: 10,
    },
    linkText:{
        fontFamily: "Poppins-Bold",
        marginTop: -50
    }
})

export default RegisterScreen