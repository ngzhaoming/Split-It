import React, { Component } from 'react';
import {
    Container, Input, Content, Footer, Picker, List,
    FooterTab, Button, Text, Icon, Form, Item, ListItem,
    Right, Body, Textarea, Left,
} from 'native-base';

const person = (item) => {
    return (
        <ListItem key={item.id}>
            <Body>
                <Text>{`${item.first_name} ${item.last_name}`}</Text>
                <Text note>{`${item.phone_number}`}</Text>
            </Body>
            <Right>
                <Item>
                    <Input
                        placeholder="0"
                        maxLength={3}
                    />
                    <Text>%</Text>
                </Item>
            </Right>
        </ListItem>
    )
}

export default person;