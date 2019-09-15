import React, { Component } from 'react';
import { Text, View, Animated , StyleSheet } from 'react-native';

const languageTop = ["select \nlanguage", "选择语言", "Pilih \nBahasa", "மொழியைத் \nதேர்ந்தெடுங்கள்"];

export default class LanguageHeader extends Component {
    state = {
        count: 0,
        animated: new Animated.Value(0),
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count === 3 ? 0 : this.state.count + 1})
        }, 4000);
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.animated, {
                    toValue: 1,
                    duration: 2000,
                }),
                Animated.timing(this.state.animated, {
                    toValue: 0,
                    duration: 2000,
                })
            ])
        ).start();
    }

    render() {
        return (
            <View style = {styles.container}>
                <Animated.Text style = {[styles.text, {opacity: this.state.animated}]}> 
                    {languageTop[this.state.count]} 
                </Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, 
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        color: 'black', 
        fontSize: 40,
    }
})

