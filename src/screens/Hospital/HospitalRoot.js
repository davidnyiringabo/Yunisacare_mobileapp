import { View } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Post from "./Post"
import Profile from "./Profile"
import Browse from "./Browse"
import TabBarIcon from "../../components/tabBarIcon"
import CustomHeader from "../../components/CustomHeader"

const Tabs = createBottomTabNavigator()

const HospitalRoot = ()=>{
    return(
        <Tabs.Navigator 
            screenOptions={({route})=>({
                tabBarIcon : ({focused}) =>{
                    let iconName;
                    let title;

                    if(route.name === 'Post'){
                        iconName = 'file';
                        title = "Post";
                    }else if(route.name === "Profile"){
                        iconName = 'person';
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
            <Tabs.Screen name="Post" component={Post} 
                options={({ navigation }) => ({
                    header: ()=>(
                        < CustomHeader title="Post"/>
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

export default HospitalRoot