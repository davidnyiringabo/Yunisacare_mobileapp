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
import arrowLeft from "../assets/images/menu.png"
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
        <Stack.Screen name="registercaregiver" component={RegisterCareGiver}  
          options={{headerShown: false}}
        />

        <Stack.Screen name="registerhospital" component={RegisterHospital}
        options={{headerShown: false}}
        />

        <Stack.Screen 
          name="logincaregiver" 
          component={LoginCaregiver}  
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="loginhospital" 
          component={LoginHospital}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
