// src/components/TabBarIcon.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library of your choice
import Icon from "react-native-vector-icons/FontAwesome"

const TabBarIcon = ({ focused, iconName}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} color={focused ? '#de3aad' : '#aaa'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabBarIcon;
