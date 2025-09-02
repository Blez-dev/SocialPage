import { SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";
import { StyleSheet, Text,  View, TouchableHighlight } from "react-native";


export default function LoginScreen({navigation}){


    return (
<SafeAreaView>
        <View>
            <Text>
                    Welcome Back
            </Text>
           
            <Text>
                 Please enter your account details to sign in your account
            </Text>

        </View>

        <View>

        </View>



    
</SafeAreaView>

    )
}

    const styles =StyleSheet.create({
        container: {
            
        }
    })