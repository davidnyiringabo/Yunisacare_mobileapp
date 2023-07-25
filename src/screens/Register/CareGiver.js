import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import logo from "../../assets/images/logo.png"
import NavbarComponent from "../../components/navbar"
import { ScrollView } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const LoginCaregiver = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                {/* <NavbarComponent/> */}
                    <View style={styles.suContainer}>

                        <Text style={{fontFamily: "Poppins-SemiBold", color: "#fff", fontSize: 49, textAlign: "center"}}>REGISTER</Text>
                        <Text style={{fontFamily: "Poppins-Light", fontSize: 12, textAlign: "center", marginTop: - 15, marginBottom: 30, color: "#FFF"}}>As CareGiver</Text>

                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>NAME</Text>
                            <TextInput placeholder="Ex. Dave Laghi" placeholderTextColor="#FFF" caretColor="#FFF" style={styles.textInput}/>
                        </View>

                        
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>EMAIL</Text>
                            <TextInput placeholder="Ex. Muhime hospital" placeholderTextColor="#FFF" caretColor="#FFF" style={styles.textInput}/>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>PASSWORD</Text>
                            <TextInput placeholder="Password" placeholderTextColor="#FFF" caretColor="#FFF" style={styles.textInput} secureTextEntry/>
                        </View>
                        
                        <TouchableOpacity style={[styles.signinButton, {
                            backgroundColor: "#ccc"
                        }]}>
                            <Text style={{fontFamily: "Poppins-Bold", color: "#FFF"}}>Attach identity documents</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signinButton}>
                            <Text style={{fontFamily: "Poppins-Bold", color: "#FFF"}}>Register</Text>
                        </TouchableOpacity>

                        <Text style={styles.textStyes} onPress={()=> navigation.navigate("login")}>Signin !</Text>

                    </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height + 86,
        backgroundColor: "#fff",
        position: "relative"
    }, 
    suContainer: {
        width: width,
        height: height + 70,
        backgroundColor: "#de3aad",
        display: "flex",
        position: "absolute",
        top: 90,
        right: -20,
        borderTopLeftRadius: 90,
        borderWidth: 10,
        borderColor: "#ccc",
        padding: 30
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
    formGroup:{
        display: "flex",
        flexDirection: "column"
    },
    formLabel: {
        marginLeft: 7,
        fontSize: 11,
        color: "#FFF",
        fontFamily: "Poppins-Light",
        fontWeight: "700"
    },
    textStyes:{
        fontFamily: "Poppins-Light",
        color: "#FFF",
        fontSize: 10,
        textAlign: "center"
    }
})

export default LoginCaregiver