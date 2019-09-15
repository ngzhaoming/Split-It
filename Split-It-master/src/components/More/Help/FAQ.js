import React, { Component } from 'react';
import {
    StyleSheet, Alert,
} from 'react-native';
import {
    Container, Content, Card, Text, Body, CardItem
} from 'native-base';

export default class Help extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Account</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Why do I need a Split-It account to use the app features?
                                </Text>
                                <Text></Text>
                                <Text>
                                    Having a Split-It account offers you several benefits, smoothly enhancing your
                                    bill-splitting experience. By registering your details into the database, it also allows
                                    E-payment as another payment alternative during the bill-splitting process,
                                    in addition to payment through cash.
                                </Text>
                                <Text></Text>
                                <Text>
                                    You can also tailor your own unique account with
                                    <Text style={{ fontWeight: 'bold' }}> profile photo </Text>
                                    and
                                    <Text style={{ fontWeight: 'bold' }}> username.</Text>
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    How to change my profile details?
                                </Text>
                                <Text></Text>

                                <Text>
                                    <Text>From the Split-It </Text>
                                    <Text style={{ fontWeight: 'bold' }}>homepage </Text>
                                    <Text>> Go to </Text>
                                    <Text style={{ fontWeight: 'bold' }}>More </Text>
                                    <Text>tab > Go to </Text>
                                    <Text style={{ fontWeight: 'bold' }}>Profile. </Text>
                                    In the Profile tab users are able to edit their:
                                </Text>
                                <Text></Text>

                                <Text>    1) Profile picture</Text>
                                <Text>    2) Mobile Number</Text>
                                <Text>    3) Username</Text>
                                <Text>    4) Email address</Text>
                                <Text>    5) Password</Text>
                                <Text></Text>

                                <Text>
                                    In addition, users are also given the option to toggle between
                                    notification alerts from the app and also change their language
                                    preferences of the app.
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    How do I delete my Split-It account?
                                </Text>
                                <Text></Text>

                                <Text>
                                    <Text>From the Split-It </Text>
                                    <Text style={{ fontWeight: 'bold' }}>homepage </Text>
                                    <Text>> Go to </Text>
                                    <Text style={{ fontWeight: 'bold' }}>More </Text>
                                    <Text>tab > Select </Text>
                                    <Text style={{ fontWeight: 'bold' }}>Delete account </Text>
                                    option.
                                </Text>
                                <Text></Text>

                                <Text>
                                    Please note that there is no way to un-delete your account. It means that
                                    the account's records, receipt images, expenditure records will also be deleted.
                                </Text>
                                <Text></Text>

                                <Text>
                                    Before deleting your account permanently, if you are encountering any issue with
                                    Split-It, don't hesitate to let us know via email at
                                    <Text style={{ color: '#2980b9' }}> splititmm@gmail.com</Text>
                                    . We will address the issues to the best of our capabilities.
                                </Text>
                                <Text></Text>

                                <Text>
                                    We value every user's feedback and will use it to improve
                                    our app to serve you better next time! Thank you!
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>Sync Options</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Contacts are not synced and loaded onto the app.
                                </Text>
                                <Text></Text>
                                <Text>
                                    For Android users, please ensure that you have given permission to Split-It app
                                    to access your contact list.
                                    <Text> On your phone, go to </Text>
                                    <Text style={{ fontWeight: 'bold' }}>Settings </Text>
                                    <Text>from there select </Text>
                                    <Text style={{ fontWeight: 'bold' }}>Downloaded Apps </Text>
                                    <Text>and choose </Text>
                                    <Text style={{ fontWeight: 'bold' }}>Split-It </Text>
                                    From the settings option, toggle the contacts permission option to true.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>Common issues & Troubleshooting</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Split-It app keeps crashing / has stopped working.
                                </Text>
                                <Text></Text>
                                <Text>
                                    This card will provide you common troubleshooting steps when you encounter app crashes.
                                </Text>
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>1) Restart your device</Text>
                                <Text></Text>
                                
                                <Text style={{ fontWeight: 'bold' }}>2) Check for Split-It updates</Text>
                                <Text>
                                    Open App Store > Updates > Pull to Refresh > look for update from Split-It
                                </Text>
                                <Text></Text>
                                
                                <Text  style={{ fontWeight: 'bold' }}>3) Check for OS updates</Text>
                                <Text>On Android: Open Device Settings > About Phone >  Software Update</Text>
                                <Text>On iOS: Open Device Setttings > General > Software Updates</Text> 
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>4) Check your Internet connection</Text>
                                <Text>- Check the network cables, modem, and router.</Text>
                                <Text>- Reconnect to Wi-Fi</Text>
                                <Text>- Connect to a different Wi-Fi or cellular data</Text>
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>5) Free up your device's storage space</Text>
                                <Text>
                                    Make sure your device has more than 10% storage available, otherwise it may start
                                    encountering performance issues.
                                </Text>
                                <Text></Text>

                                <Text  style={{ fontWeight: 'bold' }}>6) Reinstall the app</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'darkblue',
        fontFamily: 'HelveticaNeue-Bold',
    }
})