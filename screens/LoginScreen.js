import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={styles.upperLogo}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.upperText1}>Welcome Back</Text>

        <Text style={styles.upperText2}>
          Please enter your account details to sign in your account
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextInputContainer1}>
          <TextInput style={styles.TextInput1} placeholder="Username" />
        </View>

        <View style={styles.bottomTextInputContainer2}>
          <TextInput
            style={styles.TextInput2}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.forgetPasswordText}>Forgot Password? </Text>

        <TouchableHighlight
          style={styles.bottomButton1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.bottomButton1Text1}>Sign in </Text>
        </TouchableHighlight>

        <View style={styles.divider} />

        <TouchableHighlight style={styles.googleContainer}>
          <View style={styles.continueWithGoogleContainer}>
            <Image
              source={require("../assets/gg.png")}
              style={styles.google}
            />
            <Text style={styles.continueWithGoogleText}>
              Continue with Google </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.facebookContainer}>
          <View style={styles.continueWithFacebookContainer}>
            <Image
              source={require("../assets/meta1.png")}
              style={styles.facebook}
              resizeMode="contain"
            />
            <Text style={styles.continueWithGoogleText}>
              Continue with Meta
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E24",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#1E1E24",
    flex: 0.3,
  },
  upperLogo: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 40,
  },
  upperText1: {
    color: "white",
    marginHorizontal: 27,
    fontSize: 40,
    marginBottom: 10,
  },
  upperText2: {
    color: "white",
    marginHorizontal: 27,
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: "#BFCDE0",
    flex: 0.7,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bottomTextInputContainer1: {
    backgroundColor: "#F3F1F1",
    height: 60,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    padding: 10,
  },
  TextInput1: {
    flex: 1,
    fontSize: 18,
    color: "black",
    marginLeft: 5,
    paddingVertical: 0,
  },
  bottomTextInputContainer2: {
    backgroundColor: "#F3F1F1",
    height: 60,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    padding: 10,
  },
  TextInput2: {
    flex: 1,
    fontSize: 18,
    color: "black",
    marginLeft: 5,
    paddingVertical: 0,
  },
  forgetPasswordText: {
    marginLeft: 200,
    marginTop: 12,
    fontSize: 14,
  },
  bottomButton1: {
    width: "100%",
    backgroundColor: "#3B3355",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 20,
    marginTop: 20,
  },
  bottomButton1Text1: {
    fontSize: 16,
    color: "white",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    alignSelf: "center",
    marginVertical: 14,
  },
  googleContainer: {
    backgroundColor: "white",
    height: 60,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 30,
  },
  facebookContainer: {
    backgroundColor: "white",
    height: 60,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  google: {
    width: 35,
    height: 35,
    marginLeft: 40,
  },
  facebook: {
    width: 35,
    height: 35,
    marginLeft: 40,
  },
  continueWithGoogleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  continueWithFacebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  continueWithGoogleText: {
    marginLeft: 30,
    fontSize: 16,
  },
});
