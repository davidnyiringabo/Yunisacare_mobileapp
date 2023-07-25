import { View, Text, StyleSheet, Image} from "react-native"
import {useEffect} from "react"
import logo from "../../assets/images/logo.png"
// import Poppins from "../../assets/fonts/Poppins-Black.ttf"

const SplashScreen = ({navigation})=>{

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("login")
        },3000)
    },[])

    return(
        <View style={styles.container}>
            <Image source={logo} style={{width: 200, height: 200}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b1c1a"
    },
    
})

export default SplashScreen