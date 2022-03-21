import React from 'react';
import { useForm, Form } from "react-hook-form";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginForm({ navigation }){
   

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Password" style={styles.input} />
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 35
        
    },
    input: {
    paddingHorizontal: 15,
    
    height: 40,
    marginBottom: 15
    
    },
    label: {
        padding: 15,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        textDecorationStyle: 'double',
    },
    button: {
        backgroundColor: 'indigo',
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25
    },
    text: {
        color: 'white'
    }
})

export default LoginForm;