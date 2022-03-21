import React from 'react';
import { useForm, Form } from "react-hook-form";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, View } from "react-native";

function RegisterForm({ navigation }){
   

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Password" style={styles.input} />
            <TouchableOpacity
            onPress={() => navigation.navigate('NewAccountForm')}
             style={styles.button}>
                <Text style={styles.text}>Register</Text>
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
        padding: 10,
        borderRadius: 25
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})

export default RegisterForm;