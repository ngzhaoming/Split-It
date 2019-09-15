import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Separator,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Text,
  Item,
  Input,
  Button,
  Body,
  Left,
  Right
} from "native-base";
import { connect } from "react-redux";

const ContactList = props => {
  const list = ({ allContacts }) => {
    if (allContacts) {
      return allContacts.map(item => {
        return (
          <ListItem key={item.id}>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.phoneNumbers[0].number}</Text>
            </Body>
          </ListItem>
        );
      });
    }
  };
  return <List>{list(props)}</List>;
};

class Contactpage extends Component {
  static navigationOptions = {
    headerTitle: "Contacts"
  };

  // updateSearch = search => {
  //   this.setState({ search });
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Item
            searchBar
            rounded
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 20
            }}
          >
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
            />
            <Icon name="ios-people" />
          </Item>

          <Separator bordered style={{ marginTop: 20 }}>
            <Text>All Contacts</Text>
          </Separator>

          <ContactList allContacts={this.props.contactList} />

          <Button
            iconRight
            rounded
            dark
            black
            style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}
            onPress={() => navigate("Splitpage")}
          >
            <Text style={styles.proceedText}>Proceed</Text>
            <Icon type="FontAwesome" name="hand-o-right" />
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  proceedText: {
    fontFamily: "helvetica neue"
  }
});

const mapState = state => ({
  contactList: state.contact.contactList
});

export default connect(mapState)(Contactpage);
