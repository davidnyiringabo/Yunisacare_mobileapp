import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons';

import HomeScreen from './Home/HomeScreen';
import RegisterScreen from './Register/registerScreen';
import SplashScreen from './Splash/splashScreen';
import RegisterCareGiver from './Register/CareGiver';
import RegisterHospital from './Register/registerHospital';
import arrowLeft from "../assets/images/left.png"
import CustomHeaderTitle from '../components/CustomHeaderTitle';
import LoginCaregiver from './Login/CareGiverLogin';
import LoginHospital from './Login/HospitalLogin';
import LoginScreen from './Login/Login';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="registercaregiver" component={RegisterCareGiver}  options={({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      {/* <Ionicons name="arrow-back" size={24} /> */}
      <Image source={arrowLeft} style={{width: 30, height: 16}}/>
    </TouchableOpacity>
  ),
  headerTitle: (props) => (
    <CustomHeaderTitle {...props} title="Register as caregiver" />
  )
})} />
        <Stack.Screen name="registerhospital" component={RegisterHospital} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={arrowLeft} style={{width: 30, height: 12}}/>
            </TouchableOpacity>
          ),
          headerTitle: (props) => (
            <CustomHeaderTitle {...props} title="Register as Hospital" />
          ),
        })}
      />

      <Stack.Screen 
        name="logincaregiver" 
        component={LoginCaregiver}  
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={arrowLeft} style={{width: 30, height: 16}}/>
            </TouchableOpacity>
          ),
          headerTitle: (props) => (
            <CustomHeaderTitle {...props} title="Login as caregiver" />
          )
        })}
      />

      <Stack.Screen
        name="loginhospital" 
        component={LoginHospital}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              {/* <Ionicons name="arrow-back" size={24} /> */}
              <Image source={arrowLeft} style={{width: 30, height: 16}}/>
            </TouchableOpacity>
          ),
          headerTitle: (props) => (
            <CustomHeaderTitle {...props} title="Login as caregiver" />
          )
        })}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
