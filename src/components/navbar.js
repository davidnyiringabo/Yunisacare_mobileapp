import { View , Text} from "react-native"
import { useEffect, useState } from "react"
import menuImage from "../assets/images/menu.png"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const NavbarComponent = ({navigation})=>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={()=> setShowMenu(!showMenu)}>
                <Image source={menuImage} style={{width: 22, height: 22}}/>
            </TouchableOpacity>

            {
                showMenu && (
                    <View style={styles.navBarMenu}>

                        <TouchableOpacity onPress={()=> setShowMenu(false)}>
                            <Text style={{textAlign: "right", paddingRight: 5, fontFamily: "Poppins-Light"}}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={{fontFamily: "Poppins-SemiBold", color: "#FFF"}}>Create account as caregiver</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={styles.buttonText}>Create account as hospital</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={styles.buttonText}>Login as caregiver</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={styles.buttonText}>Login as hospital</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonStyles, {marginTop: 60}]}>
                            <Text style={styles.buttonText}>Terms and conditions</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={styles.buttonText}>About app</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text style={styles.buttonText}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer:{
        position: "relative",
    },
    navBarMenu:{
        position: "absolute",
        top: 46,
        left: - 20,
        width: width -100,
        height: height - 70,
        backgroundColor: "#ccc",
        zIndex: 999,
        borderTopRightRadius: 10,
        paddingTop: 10,
        paddingLeft: 20
    },
    buttonStyles:{
        width: "95%",paddingTop: 10,paddingBottom: 10, marginTop: 10 ,backgroundColor: "#000", paddingLeft: 10
    },
    buttonText:{
        fontFamily: "Poppins-SemiBold",
        color: "#FFF"
    }
})

export default NavbarComponent