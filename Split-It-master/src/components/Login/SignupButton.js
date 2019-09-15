import React, { Component } from 'react'
import { Text,
         View, 
         StyleSheet, 
         TouchableOpacity 
        } from 'react-native'

export default class SignupButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity> 
                        <Text style={styles.signupButton}> Sign up</Text>
                    </TouchableOpacity>
                    <Text style={styles.signupText}>!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    signupText: {
        color: 'black',
        fontSize: 12,
    },
    signupButton: {
        color: 'red',
        fontSize: 12,
        fontWeight: '700',
    },
})
