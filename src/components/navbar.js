import { View , Text} from "react-native"
import { useEffect, useState } from "react"
import menuImage from "../assets/images/menu.png"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const NavbarComponent = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={()=> setShowMenu(!showMenu)}>
                <Image source={menuImage} style={{width: 22, height: 22}}/>
            </TouchableOpacity>

            {
                showMenu && (
                    <View style={styles.navBarMenu}>
                        <Text>THis is a menu item</Text>
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
        borderTopRightRadius: 10
    }
})

export default NavbarComponent