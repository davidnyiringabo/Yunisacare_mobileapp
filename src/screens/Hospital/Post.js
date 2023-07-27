import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import DatePickerComponent from "../../components/DatePicker";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const Post = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.textStyes}>Post a shift</Text>

            <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>NAME</Text>
                    <TextInput placeholder="Ex. Dave Laghi" placeholderTextColor="#FFF" style={styles.textInput}/>
            </View>
            <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>ADDRESS</Text>
                    <TextInput placeholder="Ex. Califonia" placeholderTextColor="#FFF" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>NAME</Text>
                <TextInput placeholder="Date" placeholderTextColor="#FFF" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>TIME DURATION</Text>

                <DatePickerComponent/>
                <View>
                    <TextInput  placeholderTextColor="#FFF" style={styles.textInput}/>
                    <Text>TO</Text>
                    <TextInput  placeholderTextColor="#FFF" style={styles.textInput}/>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>PAYRATE</Text>
                <TextInput placeholder="Date" placeholderTextColor="#FFF" caretColor="#FFF" style={styles.textInput}/>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>SKILLS REQUIRED</Text>
                <TextInput placeholder="Date" placeholderTextColor="#FFF" caretColor="#FFF" style={styles.textInput}/>
            </View>

            <TouchableOpacity style={styles.signinButton} onPress={()=> navigation.navigate("caregiverhome")}>
                <Text style={{fontFamily: "Poppins-Bold", color: "#FFF"}}>Post shift</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "left",
        paddingTop: 20,
        paddingLeft: 30
    },
    textInput:{
        width: width - 100,
        height: 50,
        margin: 9,
        paddingLeft: 20,
        fontFamily: "Poppins-Regular",
        borderRadius: 10,
        color: "#FFF",
        backgroundColor: "#f59dda"
    },
    formLabel: {
        marginLeft: 7,
        fontSize: 11,
        color: "#FFF",
        fontFamily: "Poppins-Light",
        fontWeight: "700"
    },
    textStyes:{
        fontFamily: "Poppins-bold",
        fontSize: 19
    }
})
export default Post