import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import TopBar from './components/topBar';
import ButtonPress from './components/buttonPress';
import CardView from './components/cardView1';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple',
    secondary: 'yellow',
  },
};

const randomNumber = Math.round(Math.random());

const tigerA = require("./assets/tigerA.jpeg");
const tigerB = require("./assets/tigerB.jpeg");
const lionA = require("./assets/lionA.jpeg");
const lionB = require("./assets/lionB.jpeg");

const tiger = [tigerA,tigerB]
const lion = [lionA,lionB]
const donkey = []

const animal = [lion,tiger]

export default function App() {
  
    // Set up the state to track the current animal index
    const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);

  // Function to handle button press and update the current animal index
  const handlePress = () => {
    let nextIndex = currentAnimalIndex + 1;
    if (nextIndex === animal.length) {
      nextIndex = 0;
    }
    setCurrentAnimalIndex(nextIndex);
  };

  return (
    <PaperProvider  theme={theme}>
    <TopBar ></TopBar>
    <View style={styles.container}>
      <CardView imageSource={animal[currentAnimalIndex][0]}/>
      <CardView imageSource={tiger[1]}/>
      <StatusBar style="auto" />
      <ButtonPress whenPressed={handlePress} />
    </View>
    </PaperProvider>

  );
}

AppRegistry.registerComponent(appName, () => Main);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
