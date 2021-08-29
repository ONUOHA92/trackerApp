import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from "react-native"

// importing image from external file

import logo from '../image/jetimg.jpg'

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logoImage} />

                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Login')
                        }

                        style={{
                            width: 100,
                            backgroundColor: "blue",
                            height: 40,
                            borderRadius: 5,
                        }}>
                        <Text style={{
                            textAlign: "center",
                            marginTop: 7,
                            color: "white",
                            fontSize: 20,
                            textTransform: "uppercase",
                            fontWeight: "700"


                        }}>login</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ marginBottom: 50, alignItems: "center", }}>
                <Text style={{ fontSize: 20, textTransform: "capitalize", fontWeight: "bold", color: "gray" }}>about jexExpress</Text>
            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,


    },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    welcomeText: {
        marginTop: 40,
        fontSize: 30,
        color: 'blue',
        fontWeight: "700",
        textTransform: 'uppercase'
    }


})

export default SplashScreen;