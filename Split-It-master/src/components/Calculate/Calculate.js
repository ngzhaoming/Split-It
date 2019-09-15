import React, { Component } from 'react';
import {
    StyleSheet, View, Alert
} from 'react-native';
import {
    Container, Header, Content, Footer,
    FooterTab, Button, Text, Icon,
} from 'native-base';

export default class Percentage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            description: this.props.navigation.state.params.description,
            people: this.props.navigation.state.params.people,
            amount: this.props.navigation.state.params.amount,
            result: this.props.navigation.state.params.result,
        };
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container>
                <Content padder>

                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: 'AmericanTypeWriter' }}>
                        Bill has been splitted equally amongst {this.state.people} people.
                    </Text>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: 'AmericanTypeWriter', marginTop: 30 }}>
                        Total Bill: ${this.state.amount}. Each person has to pay ${this.state.result}.
                    </Text>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

})