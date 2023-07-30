import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ShiftModule from "../../components/ShiftModule";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const Dashboard = ()=>{
    return(
        <View style={styles.dashboardContainer}>
            <View style={styles.shiftsContainer}>
                <Text style={{fontFamily: "Poppins-SemiBold", textAlign: "left", width: "90%", fontSize: 17, color: "#000"}}>Upcomming shifts</Text>

                <ScrollView style={styles.shiftsMainContainer}>
                    <ShiftModule hospital={"Admond hospital"} date={"Monday 11 June"} address={"Califonia"} time={"8 - 11 PM"} payrate={"$12/hr"}/>
                    <ShiftModule hospital={"Admond hospital"} date={"Monday 11 June"} address={"Califonia"} time={"8 - 11 PM"} payrate={"$12/hr"}/>
                    <ShiftModule hospital={"Admond hospital"} date={"Monday 11 June"} address={"Califonia"} time={"8 - 11 PM"} payrate={"$12/hr"}/>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    shiftsContainer:{
        width: width - 50,
        height: height - 170,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        paddingTop: 20
    },
    shiftsMainContainer:{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        paddingBottom: 10
    }
})
export default Dashboard