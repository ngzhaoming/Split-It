import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
        });
    }

    SignupUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { this.props.navigation.navigate('Profile')})
            .catch(error => {
                alert(error.message)
            })
        } catch(error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.inputContainer}>
                    <Text>
                        Email:
                    </Text>
                    <TextInput 
                        style = {styles.inputBoxTop}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        keyboardType = 'email-address'
                        onChangeText = {(email) => this.setState({email})}
                    />
                    <Text>
                        Password:
                    </Text>
                    <TextInput
                        style = {styles.inputBoxBot}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChangeText = {(password) => this.setState({password})}
                        secureTextEntry = {true}
                    />
                </View>
                <View style = {styles.buttonContainer}>
                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => this.SignupUser(this.state.email, this.state.password)}
                        >
                            <Text>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                </View>

                <View style = {styles.footerContainer}>
                    <TouchableOpacity 
                        style = {styles.backButton}
                        onPress={() => this.props.navigation.navigate('Language')}
                    >
                        <Text style = {styles.back}>
                            {"< back"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 0.35,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    inputBoxTop: {
        width: 275,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 20,
        paddingLeft: 10,
    },
    inputBoxBot: {
        width: 275,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginTop: 10,
        fontSize: 20,
        paddingLeft: 10,
    },
    buttonContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        height: 30,
        width: 70,
        borderRadius: 15
    },
    footerContainer: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }, 
    backButton: {
        flex: 15,
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    back: {
        fontSize: 25,
        color: 'black',
    },
});