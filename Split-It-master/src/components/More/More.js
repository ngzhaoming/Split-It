import React, { Component } from 'react';
import {
    StyleSheet, View, Alert, FlatList,
} from 'react-native';
import {
    Container, ListItem, Content, Footer, Separator,
    FooterTab, Button, Text, Left, Right, Body, Icon,
} from 'native-base';

export default class More extends Component {
    static navigationOptions = {
        headerTitle: 'More',
    }

    render() {
        return (
            <Container>
                <Content>
                    <ListItem icon onPress={() => this.props.navigation.navigate('Profile')}>
                        <Left>
                            <Button style={{ backgroundColor: "darkblue" }}>
                                <Icon active type='MaterialCommunityIcons' name="account" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Profile</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "limegreen" }}>
                                <Icon active type='MaterialCommunityIcons' name="contacts" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Sync Contacts</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "saddlebrown" }}>
                                <Icon active type='FontAwesome5' name="wallet" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Manage E-payment options</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "darkslategrey" }}>
                                <Icon active type='MaterialCommunityIcons' name="message-alert" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Manage Reminders</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={() => this.props.navigation.navigate('Help')}>
                        <Left>
                            <Button style={{ backgroundColor: "darkslategrey" }}>
                                <Icon active type='MaterialCommunityIcons' name="help" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Help and FAQ</Text>
                        </Body>
                    </ListItem>

                    <Separator bordered>

                    </Separator>

                    <ListItem icon onPress={() => Alert.alert(
                        "Warning!",
                        "Are you sure you want to delete your account?",
                        [
                            {
                                text: 'Yes',
                                style: 'destructive'
                            },
                            {
                                text: 'No',
                            },
                        ],
                    )}>
                        <Left>
                            <Button active style={{ backgroundColor: "red" }}>
                                <Icon type="MaterialCommunityIcons" name="delete-forever" />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{ color: 'red' }}>Delete account</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon onPress={() => this.props.navigation.navigate('Login')}>
                        <Left>
                            <Button active style={{ backgroundColor: "red" }}>
                                <Icon type="MaterialCommunityIcons" name="logout" />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{ color: 'red' }}>Logout</Text>
                        </Body>
                    </ListItem>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => this.props.navigation.navigate('Homepage')}>
                            <Icon type="FontAwesome5" name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Records')}>
                            <Icon type="FontAwesome5" name="file-alt" />
                            <Text>Record</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Notifications')}>
                            <Icon type="FontAwesome5" name="bell" />
                            <Text style={styles.notficationText}>Notification</Text>
                        </Button>
                        <Button vertical active>
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
    notficationText: {
        fontSize: 11.2,
    },
})