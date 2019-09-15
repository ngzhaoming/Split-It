import React, { Component } from 'react';
import {
    StyleSheet, Alert,
} from 'react-native';
import {
    Container, Content, Card, Text,
    CardItem, Body
} from 'native-base';

export default class Help extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Usage of App</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Types of bill-splitting option.
                                </Text>
                                <Text></Text>
                                <Text>
                                    The Split-It app provides four different kinds of bill-splitting option
                                    to ensure users convenience when settling bills in a group.
                                </Text>
                                <Text></Text>
                                <Text>Accepted currency input includes: 0, .0, .00, 0.0, 0.00</Text> 
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>1) Equally</Text>
                                <Text>The total bill is split equally amongst all the recipients the payer has selected in their contacts.</Text>
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>2) Percentage</Text>
                                <Text>
                                    The payer can determine the percentage each payee has to pay. Do note that the total percentages must
                                    amount to 100%.
                                </Text>
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>3) Unequally</Text>
                                <Text>
                                    From the list of items added into the bill, the payer can select which items each payee has to pay by matching
                                     each item to the desired payee. The respective billing notification will then be sent to the different payees.
                                </Text>
                                <Text></Text>

                                <Text style={{ fontWeight: 'bold' }}>4) Receipt</Text>
                                <Text>
                                    Users will have to allow Split-It app to access their phone's camera to take a picture of the printed receipt.
                                    Using the in app OCR feature, a list of items and their pricing will be reflected in a list on the subsequent page.
                                    In case of erroneous readings, users can edit and further add items into the list. Payers can then choose the items 
                                    individual payees have to pay.
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Linking to E-payment option.
                                </Text>
                                <Text></Text>
                                <Text>
                                    The Split-It app caters mainly to the Singaporean population and thus included an
                                    option for users to settle their bills through E-payment options. Specifically the
                                    use of DBS PayLah! E-wallet payment as another alternative to paying by cash. Please link
                                    your respective E-wallet during the sign-up page.
                                </Text>
                                <Text></Text>
                                <Text>
                                    For users who have yet to link their E-wallet through the Split-It app, you can do so by selecting
                                    <Text style={{ fontWeight: 'bold' }}> More </Text>
                                    from the homepage and choose
                                    <Text style={{ fontWeight: 'bold' }}> Manage E-payment options.</Text>
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>Known issues</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text style={styles.title}>
                                    Accuracy of OCR feature.
                                </Text>
                                <Text></Text>
                                <Text>
                                    We understand that the OCR feature may not be as accurate in scanning the receipt text which
                                    can in turn result in erroneous items and prices being reflected. We sincerely apologize and hope
                                    to seek your understanding with regards to this issue.
                                </Text>
                                <Text></Text>
                                <Text>
                                    For better experience in using the OCR feature,
                                    please ensure that the receipt that you are scanning is a printed receipt and that the text are
                                    legible without smudges. Thank you!
                                </Text>
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