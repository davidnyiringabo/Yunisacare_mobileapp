import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const width = Dimensions.get("window").width
const Profile = ()=>{
    return(
        <View style={styles.profileContainer}>
            <View style={[styles.container, {
                paddingTop: 10,
                paddingBottom: 10
            }]}>
                <TouchableOpacity>
                    <Text style={styles.text}>Edit My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Payment</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.container, {
                paddingTop: 10,
                paddingBottom: 10
            }]}>
                <TouchableOpacity>
                <Text style={styles.text}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Terms and Conditions</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Query</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Notification settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Signout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        flex: 1,
        alignItems: "center",
        gap: 10,
        justifyContent: "center"
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#e870c4",
        width: width - 50,
        borderRadius: 10
        // paddingTop: 20,
        // paddingBottom: 20,
        // paddingLeft: 20
    },
    text:{
        fontFamily: "Poppins-Bold",
        margin: 10,
        fontSize: 16
    }
})
export default Profile