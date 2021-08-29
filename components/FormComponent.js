import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

const FormComponent = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Enter your email Address"
                style={styles.input}
                onChangeText={props.emailChaneHandler}          
                value={props.email}
            />

            <TextInput
                placeholder="Enter your password"
                style={styles.input}
                onChangeText={props.passwordChaneHandler}
                secureTextEntry={true}
                value={props.password}
            
            />

            <TouchableOpacity style={styles.ButtonContainer} 
             onPress={props.onHandleSubmit}
             onPress={() =>
                navigation.navigate('home')
            }
             >
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>

           

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 48,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "blue",
        paddingLeft: 20,
        marginBottom: 15
    },
    ButtonContainer: {
        backgroundColor: "blue",
        paddingVertical: 15,
        borderRadius: 5,
    },
    ButtonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default FormComponent;