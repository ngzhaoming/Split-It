import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Contacts, } from 'expo'

export default class Profilepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            number: '',
            contactList: [],
            test: '123'
        }
        this.retrieveContacts = this.retrieveContacts.bind(this)
    }

    async retrieveContacts() {
        const contacts = await Contacts.getContactsAsync({
            fields: [Contacts.PHONE_NUMBERS],
            pageSize: 0,
            pageOffset: 0
          })
          this.setState({contactList: contacts.data});
          console.log(this.state.contactList)
    }

    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.imageContainer}>
                    <TouchableOpacity style = {styles.imageButton}>
                        <Image
                            style = {styles.image}
                            source = {require('../../images/default_avatar.png')}
                        />
                        <Text style = {styles.imageText}>
                            Click to change
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>
                        First name:
                    </Text>
                    <TextInput 
                        style = {styles.textBox}
                        onChangeText = {(firstname) => this.setState({firstname})}
                    />
                    <Text>
                        Last name:
                    </Text>
                    <TextInput
                        style = {styles.textBox}
                        onChangeText = {(lastname) => this.setState({lastname})}
                    />
                    <Text>
                        Phone number:
                    </Text>
                    <TextInput 
                        style = {styles.textBox}
                        onChangeText = {(number) => this.setState({number})}
                    />
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.contactsButton}
                        onPress = {this.retrieveContacts}
                    >
                        <Text>Sync contacts</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.footerContainer}>
                    <TouchableOpacity 
                        style = {styles.backButton}
                        onPress={() => this.props.navigation.navigate('SignupForm')}
                    >
                        <Text style = {styles.back}>
                            {"< back"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.nextButton}
                        onPress={() => this.props.navigation.navigate('Homepage',
                        {
                            contactList: this.state.test
                        })}
                    >
                        <Text style = {styles.next}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 0.4,
        alignItems: 'center',
    },
    imageButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    imageText: {
        marginTop: 5,
        fontSize: 10,
        color: 'grey',
    },
    textContainer: {
        flex: 2/3,
    },
    textBox: {
        width: 275,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 6,
        fontSize: 20,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 25,
    },
    contactsButton: {
        backgroundColor: 'lightgray',
        height: 30,
        width: 120,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1/10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    backButton: {
        flex: 0.5,
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    back:{
        fontSize: 25,
        color: 'black',
    },
    nextButton:{
        flex: 0.5,
        alignItems: 'flex-end',
        paddingLeft: 15,
    },
    next: {
        fontSize: 25,
        color: 'black',
    },
})