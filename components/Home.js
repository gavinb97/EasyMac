import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Progress from './Progress';
import FoodList from './FoodList';
import { useNavigation } from '@react-navigation/native';

function Home() {

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Hello</Text>
                <Text>Today's Progress</Text>
                <Text>Calories</Text>
                <Progress progress={.75} color={'green'} />
                <Text>Fats</Text>
                <Progress progress={.33} color={'blue'} />
                <Text>Carbohydrates</Text>
                <Progress progress={.75} color={'orange'} />
                <Text>Protein</Text>
                <Progress progress={.50} color={'red'} />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('FoodList')}
                style={styles.button}>

                <Text style={styles.buttonText}>View Food List</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate('RecipeList')}
            style={styles.button}>

                <Text style={styles.buttonText}>View Recipes</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "indigo",
        margin: 10,
        padding: 25,
        borderRadius: 25
    },
    buttonText: {
        color: "white"
    },
})

export default Home;