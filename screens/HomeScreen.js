import * as React from "react";
import { StyleSheet, Text, SafeAreaView, View, TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";




export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
            <Text style={styles.topText1} >
                Social App 
            </Text>

            <Text style={styles.topText2}>
                Capture and share the world"s moment
            </Text>
      </View>
      <View style={styles.bottomSection}>

        <Text style={styles.bottomText1}>
            Welcome
        </Text>

        <TouchableHighlight style={styles.bottomButton1} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.bottomButton1Text1}>Sign in </Text>
        </TouchableHighlight>

         <TouchableHighlight style={styles.bottomButton2} onPress={()=> navigation.navigate("Signup")}>
            <Text style={styles.bottomButton2Text2}>Sign up </Text>
        </TouchableHighlight>

      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E24"
    
  },
  topSection: {
        flex: 1,
        backgroundColor: "#1E1E24",
        justifyContent: "center",
        alignItems: "center"
  },

  topText1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    fontFamily: "sans-serif"
  },
  topText2: {
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
    marginTop: 10
  },


  bottomSection: {
    flex: 1,
    backgroundColor: "#BFCDE0",
    borderTopLeftRadius: 50,
     borderTopRightRadius: 50, 
     paddingHorizontal: 30, 
  },

  bottomText1: {
        color: "black",
        marginTop: 40,
        fontSize: 50,
        marginBottom: 50,
  },

  bottomButton1: {
    width: "100%",
    backgroundColor: "#3B3355",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 20
  },

  bottomButton1Text1: {
    fontSize: 16,
    color: "white",
  },

  bottomButton2: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 35,
  },

  bottomButton2Text2: {
    fontSize: 16,
    color: "black",
  },

  
});
