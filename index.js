/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebase} from "@react-native-firebase/app"


const firebaseConfig = {

}

if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
AppRegistry.registerComponent(appName, () => App);
