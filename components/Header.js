import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function Header (){

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Macro Tracker</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height:50,
        padding: 60,
        backgroundColor: 'indigo',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: "white"
    }
})

export default Header;