import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

function LogForm(){

    return(
        <View>
            <Text style={styles.text}>Food Name</Text>
            <TextInput style={styles.input} placeholder="Food Name" />
            <Text style={styles.text}>Serving Size (g)</Text>
            <TextInput style={styles.input} placeholder="Serving Size" keyboardType="number-pad" />
            <Text style={styles.text}>Fat (g)</Text>
            <TextInput style={styles.input} placeholder="Fat (g)" keyboardType="number-pad" />
            <Text style={styles.text}>Carbs (g)</Text>
            <TextInput style={styles.input} placeholder="Carbs (g)" keyboardType="number-pad" />
            <Text style={styles.text}>Protein (g)</Text>
            <TextInput style={styles.input} placeholder="Protein (g)" keyboardType="number-pad" />

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingVertical: 15

    },
    button: {
        alignItems: "center",
        backgroundColor: "indigo",
        margin: 10,
        marginTop: 40,
        padding: 25,
        borderRadius: 25
    },
    buttonText: {
        color: "white"
    },
    text: {
        color: "black",
        textDecorationLine: "underline",
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
        marginTop: 6
    },
    input: {
        height: 40,

    }
})


export default LogForm;