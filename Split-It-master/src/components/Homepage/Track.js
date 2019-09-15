import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Button, Alert,
} from 'react-native';

export default class Track extends Component {

    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Text>
                    This is to test that everything is fine
                </Text>
                <Button title='Press me'
                    onPress={() => Alert.alert(
                        'Template for the alert (Title)',
                        'Insert any description here',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed')},
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'destructive',
                            },
                            {
                                text: 'Remind me later',
                                onDimiss: () => console.log('Remind'),
                                style: 'cancel',
                            },
                        ],
                    )} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

})