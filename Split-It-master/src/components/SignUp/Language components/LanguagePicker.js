import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, TouchableOpacity } from 'react-native';

export default class LanguagePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            language: 'Pick a language...',
        }
    }

    ToggleState = () => {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {this.ToggleState}
                >
                    <Text style = {styles.text}>
                        {this.state.language}
                    </Text> 
                </TouchableOpacity>
                {
                    this.state.hidden 
                    ? <View style = {styles.pickerContainer}>
                        <Picker
                            selectedValue = {this.state.language}
                            style = {styles.picker}
                            itemStyle = {styles.text}
                            onValueChange = {(itemValue) => 
                            this.setState({language: itemValue})}
                        >
                            <Picker.Item label = "Pick a language..." value = "Pick a language..."/>
                            <Picker.Item label = "English" value = "English"/>
                            <Picker.Item label = "简体中文" value = "简体中文"/>
                            <Picker.Item label = "Bahasa Melayu" value = "Bahasa Melayu"/>
                            <Picker.Item label = "தமிழ்" value = "தமிழ்"/>
                        </Picker>
                    </View>
                    : <View style = {styles.pickerContainer}>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        height: 40,
        width: 200,
        borderRadius: 5,
        paddingLeft: 15,
    },
    text: {
        fontSize: 20,
    },
    pickerContainer: {
        flex: 0.5
    },
    picker: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
    }
});