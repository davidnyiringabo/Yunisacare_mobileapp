import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";

const RegisterScreen = ()=>{
    return(
        <View>
            <View>
                <Text>Yunisa Care Flex</Text>
            </View>

            <View>
                <TouchableOpacity>Register as a caregiver</TouchableOpacity>
                <Text>Or</Text>
                <TouchableOpacity>Register as a Hospital/caregiving home</TouchableOpacity>
            </View>

            <TouchableOpacity>Forgot password</TouchableOpacity>


            <Text>Already have an account? <Text>Sign in</Text></Text>
            
        </View>
    )
}

export default RegisterScreen