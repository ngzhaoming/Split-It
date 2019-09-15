import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput, Alert
} from 'react-native';
import * as firebase from 'firebase';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: '',
        })
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {this.props.navigation.navigate('Homepage')})
            .catch(error => {
                alert(error.message);
            })
        } catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Login/Logo.png')}
                    />
                </View>

                <View style={styles.loginFormContainer}>
                    <View style={styles.inputContainer}>
                        <Text>
                            Email:
                        </Text>
                        <TextInput 
                            style={styles.inputBox}
                            autoCapitalize = 'none'
                            allowFontScaling = {false}
                            autoCorrect = {false}
                            keyboardType = 'email-address'
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <Text>
                            Password:
                        </Text>
                        <TextInput 
                            style={styles.inputBox}
                            autoCapitalize = 'none'
                            allowFontScaling = {false}
                            autoCorrect = {false}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => this.loginUser(this.state.email, this.state.password)}>
                        <Text style={styles.loginText}> Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Language')}>
                        <Text style={styles.signupButton}> Sign up</Text>
                    </TouchableOpacity>
                    <Text style={styles.signupText}>!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 190,
        height: 190,
        resizeMode: 'contain',
    },
    loginFormContainer: {
        flex: 1 / 3,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
    },
    inputBox: {
        width: 275,
        height: 35,
        backgroundColor: 'lightgray',
        borderRadius: 6,
        marginTop: 5,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 10,
    },
    loginButton: {
        width: 110,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    loginText: {
        color: 'black',
        fontSize: 20,
    },
    signupContainer: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    signupText: {
        fontSize: 15,
        color: 'black',
    },
    signupButton: {
        fontSize: 15,
        color: 'red',
    },
})