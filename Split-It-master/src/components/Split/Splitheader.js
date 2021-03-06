import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TouchableHighlight,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class Heading extends Component<Props> {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.topBorder}>Profile</Text>
                <TouchableHighlight style={styles.button} onPress={() => { }}>
                    <View>
                        <FontAwesomeIcon name="chevron-circle-right"
                            size={40}
                            style={styles.buttonstyle}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
    },
    topBorder: {
        flex: 0.9,
        marginTop: 50,
        backgroundColor: 'darkblue',
        color: 'snow',
        fontFamily: 'Helvetica Neue',
        fontSize: 30,
        paddingLeft: 140,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'bottom',
    },
    button: {
        borderWidth: 0.5,
        borderColor:'darkblue',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'darkblue',
        borderRadius:20,
        marginTop: 45,
    },
    buttonstyle: {
        color: 'darkgray',
    },
});


