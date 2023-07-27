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
import NavbarComponent from '../components/navbar';
import CareGiverRoot from './CareGiver/RootCareGiver';
import HospitalRoot from './Hospital/HospitalRoot';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={RegisterScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <></>
            ),
            headerTitle: (props) => (
              < NavbarComponent/>
            )
          })}
        />
        <Stack.Screen name="login" component={LoginScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <></>
          ),
          headerTitle: (props) => (
            < NavbarComponent/>
          )
        })}
        />
        <Stack.Screen name="registercaregiver" component={RegisterCareGiver}  options={({ navigation }) => ({
  headerLeft: () => (
    <></>
  ),
  headerTitle: (props) => (
    < NavbarComponent/>
  )
})}
 />
        <Stack.Screen name="registerhospital" component={RegisterHospital} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <></>
          ),
          headerTitle: (props) => (
            < NavbarComponent/>
          )
        })}
      />

      <Stack.Screen 
        name="logincaregiver" 
        component={LoginCaregiver}  
        options={({ navigation }) => ({
          headerLeft: () => (
            <></>
          ),
          headerTitle: (props) => (
            < NavbarComponent/>
          )
        })}
      />

      <Stack.Screen
        name="loginhospital" 
        component={LoginHospital}
        options={({ navigation }) => ({
          headerLeft: () => (
            <></>
          ),
          headerTitle: (props) => (
            < NavbarComponent/>
          )
        })}
      />

      <Stack.Screen name='caregiverhome' component={CareGiverRoot} options={{headerShown: false}}/>
      <Stack.Screen name='hospitalhome' component={HospitalRoot} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
