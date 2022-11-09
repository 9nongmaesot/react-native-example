// Aboutscreen.js
import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';

const NongScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.photo}
        source={require('../assets/images/lovely.jpg')}
      />
      <Text style={styles.name}>Siripun Nuntasiri โหน่ง ^_^</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    fontSize: 30,
  },
  photo: {
    padding: 20,
    marginTop: 15,
    width: 230,
    height: 250
  },
  name: {
    padding: 20,
    marginTop: 15,
    fontSize: 15,
  }
});

export default NongScreen;