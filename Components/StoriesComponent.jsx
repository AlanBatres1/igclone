import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{ LinearGradient }from 'expo-linear-gradient'
import joinIcon from'../assets/file.png'


export default function StoriesComponent() {
  return (
    // We are creating a carrousel by adding horizpntal to our scroll view component
  <ScrollView horizontal>
    {/* Container that hold our stories bubble */}
    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>

    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>

    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>

    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>

    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>

    <View style={styles.container}>
      {/* Gradient border */}
     <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={joinIcon}/>
      </View>

     </LinearGradient>
     <Text style={styles.labelText}>Alan</Text>
    </View>
  </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  labelText: {
    color: "white",
    fontSize: 15,
    marginTop: 5
  }
})