import React, { Component } from 'react';
import {
    StyleSheet, Alert,
} from 'react-native';
import {
    Container, Content, Footer,
    FooterTab, Button, Text, Icon, Body,
    Card, CardItem,
} from 'native-base';
import * as Expo from 'expo';
import { connect } from 'react-redux';
import { action_store_contacts } from '../../redux/action/action.contacts';


class Homepage2 extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: <Icon type='MaterialCommunityIcons' name='timer'
            style={{ color: "black", paddingRight: 10 }}
            onPress={() => Alert.alert(
                'This is to view the records',
                'Are you sure you want to view the records.'
            )}
        />,
    }

    constructor(props) {
        super(props);
        this.state = {
            permission: true,
            contactList: [],
        }
    }

    async componentDidMount() {
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            return;
        }
        const contacts = await Expo.Contacts.getContactsAsync({
            fields: [Expo.Contacts.PHONE_NUMBERS],
            pageSize: 0,
            pageOffset: 0
        })
            const sorted = contacts.data.filter(item => {
                return item.phoneNumbers != undefined
              })
              .sort((item1, item2) => {
                return item1.name.localeCompare(item2.name)
              })
              console.log(sorted)
            this.props.action_store_contacts(sorted)
            this.setState({permission: false});
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full large rounded dark disabled = {this.state.permission}
                        onPress={() => {
                            this.props.navigation.navigate('SplitButton')
                            }}>
                        <Text style={styles.splitText}>
                            SPLIT
                        </Text>
                    </Button>

                    <Card style={{ marginTop: 20 }}>
                        <CardItem header bordered>
                            <Text>Expenditure: June 2019</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    General:
                                </Text>
                            </Body>
                            <Text>$1000</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Food and Drinks:
                                </Text>
                            </Body>
                            <Text>$20.50</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Entertainment:
                                </Text>
                            </Body>
                            <Text>$31.75</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Transportation:
                                </Text>
                            </Body>
                            <Text>$20.50</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Groceries:
                                </Text>
                            </Body>
                            <Text>$132.00</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Home:
                                </Text>
                            </Body>
                            <Text>$5.00</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Life:
                                </Text>
                            </Body>
                            <Text>$120.20</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Utilities:
                                </Text>
                            </Body>
                            <Text>$54.10</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Others (uncategorized):
                                </Text>
                            </Body>
                            <Text>$3.90</Text>
                        </CardItem>

                        <CardItem footer bordered>
                            <Body>
                                <Text style={{ color: 'red' }}>
                                    Total:
                                </Text>
                            </Body>
                            <Text style={{ color: 'red' }}>$1387.95</Text>
                        </CardItem>
                    </Card>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon type="FontAwesome5" name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Records')}>
                            <Icon type="FontAwesome5" name="file-alt" />
                            <Text>Record</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Notifications')}>
                            <Icon type="FontAwesome5" name="bell" />
                            <Text style={styles.notificationText}>Notification</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('More')}>
                            <Icon type="FontAwesome5" name="ellipsis-h" />
                            <Text>More</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    notificationText: {
        fontSize: 11.2,
    },
    splitText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'paleturquoise',
    }
})

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({
    action_store_contacts: (contacts) => dispatch(action_store_contacts(contacts))
})

export default connect(mapState, mapDispatch)(Homepage2)