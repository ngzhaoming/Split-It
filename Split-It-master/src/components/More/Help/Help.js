import React, { Component } from 'react';
import {
    StyleSheet, Alert,
} from 'react-native';
import {
    Container, Content, Text, Tabs,
    TabHeading, Icon, Tab, Header,
} from 'native-base';
import AppHelp from './AppHelp'
import FAQ from './FAQ'

export default class Help extends Component {
    static navigationOptions = {
        headerTitle: 'Help and FAQ',
    }

    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={
                        <TabHeading>
                            <Icon type='MaterialIcons' name="apps" />
                            <Text>App Help</Text>
                        </TabHeading>}>
                        <AppHelp />
                    </Tab>
                    <Tab heading={<TabHeading>
                        <Icon type='MaterialCommunityIcons' name="help-circle" />
                        <Text>FAQ</Text>
                    </TabHeading>}>
                        <FAQ />
                    </Tab>
                </Tabs>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
})