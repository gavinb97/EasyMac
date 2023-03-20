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
        <View style={styles.containerMain}>

        <View style={styles.containerMain}>
            <View style={{flex: .25}}>
                <Text style={styles.progressText}>Today's Progress</Text>
            </View>
            <View style={{flex: 4}}>
                <View style={{marginHorizontal: 10, marginVertical: 12}}>
                <Text>Calories:</Text>
                <Progress progress={.75} color={'green'} />
                </View>

                <View style={{marginHorizontal: 10, marginVertical: 12}}>
                <Text>Fats:</Text>
                <Progress progress={.33} color={'blue'} />
                </View>

                <View style={{marginHorizontal: 10, marginVertical: 12}}>
                <Text>Carbohydrates:</Text>
                <Progress progress={.75} color={'orange'} />
                </View>

                <View style={{marginHorizontal: 10, marginVertical: 12}}>
                <Text>Protein:</Text>
                <Progress progress={.50} color={'red'} />
                </View>
            </View>
        </View>
        
        <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('FoodList')}
                style={styles.button}>
                
                <Text style={styles.buttonText}>View Food List</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "grey",
        margin: 50,
        marginHorizontal: 50,
        padding: 25,
        borderRadius: 35,
    },
    buttonText: {
        color: "black"
    },
    containerMain: {
        flex: 5
    },
    topView: {
        flex: 1
    },
    progressText: {
        marginLeft: 10,
        marginTop: 10,
        textDecorationLine: 'underline'
    }
})

export default Home;