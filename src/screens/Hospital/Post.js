import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View, TouchableOpacity, ScrollView } from "react-native";
import DatePickerComponent from "../../components/DatePicker";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const Post = ({navigation})=>{
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textStyes}>Post a shift</Text>

            <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>NAME</Text>
                    <TextInput placeholder="Ex. Dave Laghi" placeholderTextColor="#ccc" style={styles.textInput}/>
            </View>
            <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>ADDRESS</Text>
                    <TextInput placeholder="Ex. Califonia" placeholderTextColor="#ccc" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>NAME</Text>
                <TextInput placeholder="Date" placeholderTextColor="#ccc" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>TIME DURATION</Text>

                {/* <DatePickerComponent/> */}
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
                    <TextInput  placeholderTextColor="#ccc" placeholder="8 AM" style={[styles.textInput, {width: (width - 120 ) / 2}]}/>
                    <Text style={[styles.formLabel, {marginLeft: 0}]}>TO</Text>
                    <TextInput  placeholderTextColor="#ccc" placeholder="8 PM" style={[styles.textInput, {width: (width - 120 ) / 2}]} required/>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>PAYRATE</Text>
                <TextInput placeholder="Date" placeholderTextColor="#ccc" caretColor="#FFF" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>SKILLS REQUIRED</Text>
                <TextInput placeholder="Date" placeholderTextColor="#ccc" caretColor="#FFF" style={styles.textInput}/>
            </View>

            <TouchableOpacity style={styles.signinButton}>
                <Text style={{fontFamily: "Poppins-Bold", color: "#FFF"}}>Post shift</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: "left",
        paddingTop: 20,
        paddingLeft: 30
    },
    textInput:{
        width: width - 100,
        height: 50,
        marginTop: 10,
        marginBottom: 11,
        paddingLeft: 20,
        fontFamily: "Poppins-Regular",
        borderRadius: 10,
        color: "#000",
        backgroundColor: "#fffdfdf9",
        fontSize: 12
    },
    formLabel: {
        marginLeft: 7,
        fontSize: 9,
        // color: "#000",
        fontFamily: "Poppins-Light",
        fontWeight: "700"
    },
    textStyes:{
        fontFamily: "Poppins-SemiBold",
        fontSize: 19,
        color: "#000",
        marginBottom: 10
    },
    signinButton:{
        width: width - 100,
        height: 50,
        backgroundColor: "#000",
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "start"
    }
})
export default Post