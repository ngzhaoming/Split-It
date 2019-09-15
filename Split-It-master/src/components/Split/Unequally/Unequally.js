import React, { Component } from 'react';
import {
    StyleSheet, ListView,
} from 'react-native';
import {
    Container, Header, Content, Footer,
    FooterTab, Button, Text, Left, Right, Body, Title, Icon,
    List, ListItem, //Consider using flat list instead
} from 'native-base';

const datas = [
    'Food', 'Drinks', 'Fries', 'Appetizer'
  ];

export default class Unequally extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-dropleft' />
                        </Button>
                    </Left>

                    <Body>
                        <Title>Unequally</Title>
                    </Body>

                    <Right>
                        <Button transparent>
                            <Icon name='ios-arrow-dropright' />
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    <List
                        rightOpenValue={-75}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem>
                                <Text> {data} </Text>
                            </ListItem>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                    />

                    <Button dark style={{
                        marginTop: 20,
                        alignSelf: 'center'
                    }}>
                        <Icon name='ios-add' />
                        <Text>Add Items</Text>
                    </Button>

                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon type="FontAwesome5" name="equals" />
                            <Text>Equal</Text>
                        </Button>
                        <Button vertical>
                            <Icon type="FontAwesome5" name="percentage" />
                            <Text>Percent</Text>
                        </Button>
                        <Button vertical active>
                            <Icon type="FontAwesome5" name="not-equal" />
                            <Text>Unequal</Text>
                        </Button>
                        <Button vertical>
                            <Icon type="FontAwesome5" name="receipt" />
                            <Text>Receipt</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

})