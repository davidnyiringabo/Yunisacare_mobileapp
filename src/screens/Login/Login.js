import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import doctorsImage from "../../assets/images/doctors.png"
import { ScrollView } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const LoginScreen = ({navigation})=>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{display: "flex", alignItems: "center"}}>
                {/* <Image source={doctorsImage} style={{width: 270, height: 270}}/> */}
                <Text style={{fontFamily: "Poppins-Bold", fontSize: 28, textAlign: "center",paddingTop: 40, marginBottom: -6}}>Welcome back to 
                <Text style={{fontSize: 22}}>                            Yunisa care flex</Text></Text>
                <Text style={{fontFamily: "Poppins-Light",  textAlign: "center", marginBottom: 290}}>Log into your account to continue.</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("logincaregiver")}>
                    <Text style={styles.buttonText}>Login as a caregiver</Text>
                </TouchableOpacity>

                {/* <Text style={styles.text}>Or</Text> */}

                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("loginhospital")}>
                    <Text style={styles.buttonText}>Login as a Hospital/caregiving home</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{textAlign: "center", marginTop: 20}}>
                <Text style={{fontFamily: "Poppins-Bold", fontSize: 13}}>Forgot password ?</Text>
            </TouchableOpacity>

            <Text style={styles.linkText}>Don't have an account? <Text style={{color: "#1a85d6"}} onPress={()=> navigation.navigate("register")}>Sign up</Text></Text>
        </View>
        </ScrollView>
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
        marginTop: 10
    }
})

export default LoginScreen