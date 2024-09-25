// App.js
import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import CustomButton from './components/CustomButton'; // Import the CustomButton

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'green', // Set the initial background color to green
    };
  }

  handleButtonClick = (newColor) => {
    this.setState({ backgroundColor: newColor });
    Alert.alert('Thay đổi màu', `Màu nền đã được đổi thành ${newColor}`, [{ text: 'OK' }]);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Top white bar */}
        <View style={styles.whiteBar} />

        {/* Main content area */}
        <View style={[styles.content, { backgroundColor: this.state.backgroundColor }]}>
          {/* Add buttons for each color */}
          {['green', 'blue', 'brown', 'yellow', 'red', 'black'].map((color) => (
            <CustomButton
              key={color}
              backgroundColor={color}
              onClick={this.handleButtonClick}
            />
          ))}
        </View>

        {/* Bottom white bar with reduced height */}
        <View style={[styles.whiteBar, styles.smallWhiteBar]} />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Space between top bar, content, and bottom bar
  },
  whiteBar: {
    height: 50, // Height of the top white bar
    backgroundColor: 'white',
  },
  smallWhiteBar: {
    height: 10, // Height of the bottom white bar
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color of the content area
  },
});

export default App;
