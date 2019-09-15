import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import LanguageHeader from './Language components/LanguageHeader';

export default class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            language: 'Pick a language...',
        }
    }

    ToggleState = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <LanguageHeader />
                </View>

                <View style={styles.pickerContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.ToggleState}
                    >
                        <Text style={styles.text}>
                            {this.state.language}
                        </Text>
                    </TouchableOpacity>
                    {
                        this.state.hidden
                            ? <View style={{ flex: 0.5 }}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.picker}
                                    itemStyle={styles.text}
                                    onValueChange={(itemValue) =>
                                        this.setState({ language: itemValue })}
                                >
                                    <Picker.Item label="Pick a language..." value="Pick a language..." />
                                    <Picker.Item label="English" value="English" />
                                    <Picker.Item label="简体中文" value="简体中文" />
                                    <Picker.Item label="Bahasa Melayu" value="Bahasa Melayu" />
                                    <Picker.Item label="தமிழ்" value="தமிழ்" />
                                </Picker>
                            </View>
                            : <View style={styles.pickerContainer}>
                            </View>
                    }
                </View>

                <View style={styles.footerContainer}>
                <TouchableOpacity
                        style = {styles.backButton}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.back}>
                            {"< back"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.nextButton}
                        onPress={() => this.props.navigation.navigate('SignupForm')}>
                        <Text style={styles.next}>
                            {"next >"}
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
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 1 / 2,
        justifyContent: 'center',
    },
    pickerContainer: {
        flex: 1 / 2,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        height: 40,
        width: 220,
        borderRadius: 5,
        paddingLeft: 15,
    },
    text: {
        fontSize: 20,
    },
    picker: {
        height: 200,
        width: 220,
        backgroundColor: 'white',
    },
    footerContainer: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    backButton: {
        flex: 0.5,
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    back: {
        fontSize: 25,
        color: 'black',
    },
    nextButton: {
        flex: 0.5,
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    next: {
        fontSize: 25,
        color: 'black',
    },
});