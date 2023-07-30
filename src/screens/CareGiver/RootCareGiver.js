import { View } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Browse from "./Browse"
import TabBarIcon from "../../components/tabBarIcon"
import CustomHeader from "../../components/CustomHeader"

const Tabs = createBottomTabNavigator()

const CareGiverRoot = ()=>{
    return(
        <Tabs.Navigator 
            screenOptions={({route})=>({
                tabBarIcon : ({focused}) =>{
                    let iconName;
                    let title;

                    if(route.name === 'Dashboard'){
                        iconName = 'heart';
                        title = "Dashboard";
                    }else if(route.name === "Profile"){
                        iconName = 'user';
                        title = "Profile"
                    }else if(route.name === "Browse") {
                        iconName = "search";
                        title = "Browse"
                    }

                    return <TabBarIcon focused={focused} iconName={iconName}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: '#de3aad',
                inactiveTintColor: '#aaa',
                labelStyle: {
                  fontSize: 10,
                  fontFamily:"Poppins-Bold"
                },
                style: {
                  backgroundColor: '#e870c4',
                  borderTopWidth: 1,
                  borderTopColor: '#ccc'
                },
              }}
        >
            <Tabs.Screen name="Dashboard" component={Dashboard} 
                options={({ navigation }) => ({
                    header: ()=>(
                        < CustomHeader title="Dashboard"/>
                    )
                })}
            />
            <Tabs.Screen name="Browse" component={Browse}
                options={({ navigation }) => ({
                    header: ()=>(
                        < CustomHeader title="Browse"/>
                    )
                })}/>
            <Tabs.Screen name="Profile" component={Profile}
                options={({ navigation }) => ({
                    header: ()=>(
                        < CustomHeader title="Profile"/>
                    )
                })}
            />
        </Tabs.Navigator>
    )
}

export default CareGiverRoot