import React, { Component } from 'react';
import {
    StyleSheet, Alert,
} from 'react-native';
import {
    Container, Content, Footer,
    FooterTab, Button, Text, Icon, Body,
    Card, CardItem,
} from 'native-base';

export default class Notifications extends Component {
    static navigationOptions = {
        headerTitle: 'Notifications',
    }

    render() {
        return (
            <Container>
                <Content>
                    
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
                        <Button vertical active>
                            <Icon type="FontAwesome5" name="bell" />
                            <Text style={styles.notficationText}>Notification</Text>
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
    notficationText: {
        fontSize: 11.2,
    },
})