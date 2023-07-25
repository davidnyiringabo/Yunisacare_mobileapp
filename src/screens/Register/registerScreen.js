import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import logo from "../../assets/images/logo.png"
import NavbarComponent from "../../components/navbar"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const LoginCaregiver = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.suContainer}>
                <Text style={{fontFamily: "Poppins-SemiBold", color: "#fff", fontSize: 33, textAlign: "center"}}>Create new <Text>account</Text></Text>
                <Text style={{fontFamily: "Poppins-Light", fontSize: 12, textAlign: "center", marginTop: - 15, marginBottom: 30, color: "#FFF"}}>Already registered? <Text style={{fontFamily: "Poppins-Bold"}} onPress={()=> navigation.navigate("login")}>Log in here</Text></Text>

                <TouchableOpacity style={styles.signinButton} onPress={()=> navigation.navigate("registerhospital")}>
                    <Text style={styles.formLabel}>As CareHome / Hospital</Text>
                </TouchableOpacity>

                <Text style={{color: "#FFF", fontFamily: "Poppins-Bold", textAlign: "center", margin: 5}}>Or</Text>

                <TouchableOpacity style={styles.signinButton} onPress={()=> navigation.navigate("registercaregiver")}>
                    <Text style={styles.formLabel}>As CareGiver</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor: "#fff",
        position: "relative"
    }, 
    suContainer: {
        width: width,
        height: height - 100,
        backgroundColor: "#de3aad",
        display: "flex",
        position: "absolute",
        top: 90,
        right: -20,
        borderTopLeftRadius: 90,
        borderWidth: 10,
        borderColor: "#ccc",
        padding: 43
        // alignItems: "center"
    },
    textInput:{
        width: width - 100,
        height: 50,
        borderWidth: 0.4,
        borderColor: "#f59dda",
        margin: 9,
        paddingLeft: 20,
        fontFamily: "Poppins-Regular",
        borderRadius: 10,
        color: "#FFF",
        backgroundColor: "#f59dda"
    },
    signinButton:{
        width: width - 100,
        height: 50,
        backgroundColor: "#000",
        margin: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "center"
    },
    formLabel: {
        marginLeft: 7,
        fontSize: 11,
        color: "#FFF",
        fontFamily: "Poppins-Light",
        fontWeight: "700"
    }
})

export default LoginCaregiver