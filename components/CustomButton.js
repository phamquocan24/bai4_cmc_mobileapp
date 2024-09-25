// components/CustomButton.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ backgroundColor, onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={() => onClick(backgroundColor)}
    >
      <Text style={styles.buttonText}>{backgroundColor.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200, // Set a fixed width for all buttons
    paddingVertical: 15, // Increased padding for a better look
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Center the text in the button
  },
});

export default CustomButton;
