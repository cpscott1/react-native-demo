import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.title}>Hello Students</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 24
  }
})
