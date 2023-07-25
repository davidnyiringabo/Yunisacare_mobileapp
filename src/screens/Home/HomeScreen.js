import react from "react"
import { View, Text, StyleSheet } from "react-native"

const HomeScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text style={{fontFamily: "Poppins-Bold"}}>Yunisa care app</Text>
            <Text>Learn the beauty of tech.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Poppins-Black"
    }
})

export default HomeScreen