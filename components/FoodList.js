import React, { useState, useEffect } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;


function FoodList({ navigation }) {

    const [foods, setFoods] = useState();

    // const fetchFoods = () => {
    //     fetch('http://localhost:8080/api/food')
    //         .then(response => response.json()) 
    //         .then(data => setFoods(data))
    //         .catch(error => alert(error));
    // };
    async function findAll() {
        const response = await fetch('https://10.0.0.222/api/food', {method: 'GET'});
        if (response.status === 200) {
            return await response.json();
        }
        return Promise.reject("not 200 OK");
    }

    useEffect(() => {
        findAll()
        .then(setFoods)
        .catch(err => alert(err))
    });

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

                
                    {foods && foods.map(food => (
                        <DataTable.Row key={food.id}>
                            <DataTable.Cell>{food.foodName}</DataTable.Cell>
                            <DataTable.Cell numeric>{food.servingSize}</DataTable.Cell>
                            <DataTable.Cell numeric>2332</DataTable.Cell>
                            <DataTable.Cell numeric>{food.gramsFat}</DataTable.Cell>
                            <DataTable.Cell numberic>{food.gramsCarb}</DataTable.Cell>
                            <DataTable.Cell numberic>{food.gramsProtein}</DataTable.Cell>
                            <DataTable.Cell numberic>3</DataTable.Cell>

                        </DataTable.Row>
                    ))}
                
            

        </DataTable>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('FoodForm')}>
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
            export default FoodList;