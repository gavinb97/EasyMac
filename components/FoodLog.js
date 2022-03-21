import * as React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


function FoodLog() {

    const navigation = useNavigation();

    return (
        <View>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Food</DataTable.Title>
                <DataTable.Title numberic>Serving Size</DataTable.Title>
                <DataTable.Title numberic>Calories</DataTable.Title>
                <DataTable.Title numberic>Fat</DataTable.Title>
                <DataTable.Title numberic>Carb</DataTable.Title>
                <DataTable.Title numeric>Protein</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
                <DataTable.Cell numeric>324</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
            </DataTable.Row>

        </DataTable>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('LogForm')}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "indigo",
        margin: 10,
        
        borderRadius: 100,
        width: 50,
        height: 50
    },
    buttonText: {
        color: "white",
        fontSize:36
    },
})

export default FoodLog;