import React from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet} from 'react-native';


function LoginRegister({ navigation }){

    return (
            
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={styles.button}>

                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingVertical: 175

    },
    button: {
        alignItems: "center",
        backgroundColor: "indigo",
        margin: 10,
        padding: 25,
        borderRadius: 25
    },
    text: {
        color: "white",
    }
})

export default LoginRegister;