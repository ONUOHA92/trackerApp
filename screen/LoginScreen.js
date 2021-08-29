import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native"

import FormComponent from '../components/FormComponent';


// import images from its source
import loginLogo from "../image/jet.jpeg"

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    emailChaneHandler = (input) => {
        this.setState({ email: input })
    }


    passwordChaneHandler = (input) => {
        this.setState({ password: input })
    }


    onHandleSubmit = () => {
        console.warn(this.state)
    }


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>

                <View style={styles.logoContainer}>
                    <Image source={loginLogo} style={styles.loginLogo} />

                    <Text style={{
                        color: "blue",
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: "bold"
                    }}>Login</Text>
                </View>



                <View style={{ flexGrow: 1 }}>
                    <FormComponent
                        emailChaneHandler={this.emailChaneHandler}
                        passwordChaneHandler={this.passwordChaneHandler}
                        email={this.state.email}
                        password={this.state.password}
                        onHandleSubmit={this.onHandleSubmit}
                    />

                    <TouchableOpacity style={{

                    }}
                        onPress={() =>
                            this.props.navigation.navigate('Signup')
                        }

                    >
                        <View style={{ marginTop: 5, }}>
                            <Text style={{
                                color: "blue",
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>Create an Account</Text>
                            <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: "blue", width: 167, marginLeft: 135
                            }}></View>
                        </View>
                    </TouchableOpacity>
                </View>




            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginLogo: {
        height: 100,
        width: 100,
        borderRadius: 20
    }
})

export default LoginScreen;