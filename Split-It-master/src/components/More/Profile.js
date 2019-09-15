import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Container, Content, Switch, Left, Body, Right,
    ListItem, Button, Icon, Text
} from 'native-base';

export default class Profile extends Component {
    static navigationOptions = {
        headerTitle: 'Profile',
    }

    render() {
        return (
            <Container>
                <Content>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='FontAwesome' name="picture-o" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Edit Profile Picture</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='MaterialCommunityIcons' name="bell" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Edit Mobile Number</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='MaterialCommunityIcons' name="account-circle" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Edit Username</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='MaterialCommunityIcons' name="email" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Edit Email Address</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='MaterialCommunityIcons' name="lock" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Edit Password</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='MaterialCommunityIcons' name="bell" />
                            </Button>
                        </Left>
                        <Body>
                            <Text> Allow Notifications</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "white" }}>
                                <Icon style={styles.icon} active type='FontAwesome5' name="language" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Language Preferences</Text>
                        </Body>
                        <Right>
                            <Icon active type='MaterialCommunityIcons' name="chevron-right" />
                        </Right>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: 'black',
    }
})