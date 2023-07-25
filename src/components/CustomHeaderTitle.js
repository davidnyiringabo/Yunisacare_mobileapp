import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import * as Font from 'expo-font';

// Import the Poppins font
import PoppinsRegular from '../assets/fonts/Poppins-Bold.ttf';

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    fontWeight: 'normal',
  },
});

const CustomHeaderTitle = ({ title }) => {
  // Load the Poppins font
//   React.useEffect(() => {
//     Font.loadAsync({
//       PoppinsRegular: PoppinsRegular,
//     });
//   }, []);

  return <Text style={styles.headerTitle}>{title}</Text>;
};

export default CustomHeaderTitle;