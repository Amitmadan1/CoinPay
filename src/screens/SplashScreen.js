import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native';

const SplashScreen = () => {
  const backgroundImage = { uri: "https://media.istockphoto.com/id/1438063147/vector/world-map-style-technology-concept.jpg?s=612x612&w=0&k=20&c=enTpHaYH_eGdPV2HTv5Ho6pevCpGGQkIxARpPLfM8_o=" }; 
  const logoImage = { uri: 'https://i.imgur.com/XzNczrR.png' };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>CoinPay</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
