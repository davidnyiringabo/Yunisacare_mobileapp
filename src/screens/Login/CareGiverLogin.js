import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import logo from "../../assets/images/logo.png"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const LoginCaregiver = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Image source={logo} style={{width: 100, height: 100}}/>

            <Text style={{fontFamily: "Poppins-Bold", fontSize: 26}}>Log into Your Account</Text>
            <Text style={{fontSize: 10, fontFamily: "Poppins-Light", marginBottom: 20,marginTop: -10}}>Please fill this detail to log in</Text>

            <TextInput placeholder="Your email" style={styles.textInput}/>
            <TextInput placeholder="Your password" secureTextEntry={true} style={styles.textInput}/>

            <TouchableOpacity style={styles.signinButton}>
                <Text style={{color: "#fff", fontFamily: "Poppins-Bold"}}>Log in</Text>
            </TouchableOpacity>


            <Text style={{marginTop: 30, fontFamily: "Poppins-Regular"}}>Already have an account ? <Text style={{color: "#1a85d6"}} onPress={()=> navigation.navigate("login")}>Login</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        width: width,
        height: height,
        backgroundColor: "#fff"
    },
    textInput:{
        width: width - 50,
        height: 50,
        borderWidth: 0.4,
        borderColor: "#1a85d6",
        margin: 9,
        paddingLeft: 20,
        fontFamily: "Poppins-Regular",
        borderRadius: 5,
        color: "#000"
    },
    signinButton:{
        width: width - 50,
        height: 50,
        backgroundColor: "#1a85d6",
        margin: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})

export default LoginCaregiver