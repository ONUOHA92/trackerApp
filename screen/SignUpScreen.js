import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, KeyboardAvoidingView } from "react-native"

import SignFormComponent from '../components/SignFormComponent';


// import images from its source
import SignLogo from "../image/jet.jpeg"

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
           email: "",
           password: "",
           confirmPassord: ""
        }
    }


     emailChaneHandler =(input)=> {
      this.setState({email: input})
    }

    passwordChaneHandler =(input)=> {
        this.setState({password: input})
      }

      confirmChaneHandler =(input)=> {
        this.setState({confirmPassord: input})
      }


      onHandleSubmit =() => {
         console.warn(this.state)
      }
   

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>

                <View style={styles.logoContainer}>
                    <Image source={SignLogo} style={styles.SignLogo} />

                    <Text style={{
                        color: "blue",
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: "bold"
                    }}>Sign up</Text>
                </View>



                <View style={{ flex: 2 }}>
                    <SignFormComponent   
                       emailChaneHandler={this.emailChaneHandler}
                       passwordChaneHandler={this.passwordChaneHandler}
                       confirmChaneHandler={this.confirmChaneHandler}
                       email={this.state.email}
                       password={this.state.password}
                       confirmpassword={this.state.confirmPassord}
                       onHandleSubmit={this.onHandleSubmit}
                    />
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
    SignLogo: {
        height: 100,
        width: 100,
        borderRadius: 20
    }
})

export default SignUpScreen;