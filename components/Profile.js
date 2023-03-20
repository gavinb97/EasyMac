import React , {useState} from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function Profile({ navigation }){
    const [selectedSex, setSelectedSex] = useState();
    const [selectedActivity, setActivity] = useState();
    const [goal, setgoal] = useState();

    return(
        <View>
            <Text style={styles.text}>First Name</Text>
            <TextInput style={styles.input}placeholder="First Name" />
            <Text style={styles.text}>Last Name</Text>
            <TextInput style={styles.input}placeholder="Last Name" />
            <Text style={styles.text}>Weight in Lbs</Text>
            <TextInput style={styles.input} placeholder="Weight" keyboardType="number-pad" />
            <Text style={styles.text}>Height in Inches</Text>
            <TextInput style={styles.input} placeholder="Height in Inches" keyboardType="number-pad" />
            <Text style={styles.text}>Sex</Text>
            <Picker 
            selectedValue={selectedSex}
            onValueChange={(itemValue) => setSelectedSex(itemValue)}
            >
                <Picker.Item label="Male" value="true" />
                <Picker.Item label="Female" value="false" />
            </Picker>

            <Text style={styles.text}>Activity Level</Text>
            <Picker
            selectedValue={selectedActivity}
            onValueChange={i => setActivity(i)}>
                <Picker.Item label="Sedentary" value="1" />
                <Picker.Item label="Low Activity" value="2" />
                <Picker.Item label="Moderate Activity" value="3"/>
                <Picker.Item label="High Activity" value="4"/>
            </Picker>

            <Text style={styles.text}>Goal</Text>
            <Picker
            selectedValue={goal}
            onValueChange={i => setgoal(i)}
            >
                <Picker.Item label="Maintenance" value="3" />
                <Picker.Item label="Weight Loss" value="1"/>
                <Picker.Item label="Slow Weight Loss" value="2"/>
                <Picker.Item label="Slow Weight Gain" value="4"/>
                <Picker.Item label="Weight Gain" value="5"/>

            </Picker>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.button}>

                    <Text style={styles.buttonText}>Save</Text>
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
        marginLeft: 5
    },
    input: {
        height: 40,
        marginLeft: 5
        
    }
})

export default Profile;