import React, { Component } from "react";
import {
  ActivityIndicator,
  Clipboard,
  FlatList,
  Image,
  Share,
  StyleSheet,
  ScrollView,
  View,
  Alert
} from "react-native";
import {
  Container,
  Input,
  Content,
  Footer,
  Picker,
  List,
  FooterTab,
  Button,
  Text,
  Icon,
  Form,
  Item,
  ListItem,
  Right,
  Body,
  Textarea,
  Left
} from "native-base";
import { ImagePicker, Permissions } from "expo";
import uuid from "uuid";
import Environment from "../../../../config/environment";
import * as firebase from 'firebase';

export default class Percentage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      description: "",
      amount: "",
      notes: "",
      selectedContacts: this.props.navigation.state.params.selectedContacts
    };
  }

  state = {
    image: null,
    uploading: false,
    googleResponse: null
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const SelectedList = props => {
      const list = ({ allContacts }) => {
        if (allContacts) {
          return allContacts.map(item => {
            return (
              <ListItem key={item.id}>
                <Body>
                  <Text>{`${item.first_name} ${item.last_name}`}</Text>
                  <Text note>{`${item.phone_number}`}</Text>
                </Body>
                <Right>
                  <Item>
                    <Input placeholder="0" maxLength={3} />
                    <Text>%</Text>
                  </Item>
                </Right>
              </ListItem>
            );
          });
        }
      };

      return <List>{list(props)}</List>;
    };

    let { image } = this.state;

    return (
      <Container>
        <Content padder>
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            >
              <View style={styles.helpContainer}>
                <Button
                  onPress={this._pickImage}
                  title="Pick an image from camera roll"
                />

                <Button onPress={this._takePhoto} title="Take a photo" />
                {this.state.googleResponse && (
                  <FlatList
                    data={
                      this.state.googleResponse.responses[0].textAnnotations
                    }
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => (
                      <Text>Item: {item.description}</Text>
                    )}
                  />
                )}
                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}
              </View>
            </ScrollView>
          </View>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select a category"
                placeholderStyle={{ color: "#bfc6ea" }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="General" value="key0" />
                <Picker.Item label="Food and Drinks" value="key1" />
                <Picker.Item label="Entertainment" value="key2" />
                <Picker.Item label="Transportation" value="key3" />
                <Picker.Item label="Groceries" value="key4" />
                <Picker.Item label="Home" value="key5" />
                <Picker.Item label="Life" value="key6" />
                <Picker.Item label="Utilities" value="key7" />
              </Picker>
            </Item>
          </Form>

          <Item>
            <Input
              placeholder="Description"
              autoCorrect={false}
              onChangeText={description => {
                this.setState({ description });
              }}
            />
          </Item>

          <Item>
            <Icon active type="FontAwesome5" name="dollar-sign" />
            <Input
              keyboardType="numeric"
              placeholder="Amount"
              onChangeText={amount => {
                amtRegex = /^([0-9]*.[0-9]?[0-9]?)?$/;
                if (amtRegex.test(amount)) {
                  this.setState({ amount: amount });
                  this.setState({ Error: "" });
                } else {
                  this.setState({ amount: amount });
                  this.setState({ Error: "Invalid input amount" });
                }
              }}
            />
            <Text style={{ color: "red" }}>{this.state.Error}</Text>
          </Item>

          <Form style={{ marginTop: 30 }}>
            <Textarea
              rowSpan={10}
              bordered
              placeholder="Type your notes here."
              onChangeText={notes => {
                this.setState({ notes: notes });
              }}
            />
          </Form>

          <Button
            dark
            style={{
              marginTop: 20,
              alignSelf: "center"
            }}
            onPress = {this._takePhoto}
          >
            <Icon name="ios-add" />
            <Text>Add Receipt Image</Text>
          </Button>

          <Button />

          <Button
            primary
            small
            rounded
            style={{
              marginTop: 20,
              marginBottom: 20,
              alignSelf: "center",
              backgroundColor: "darkblue"
            }}
            onPress={() => {
              amtRegex = /^([0-9]*[.]*[0-9]?[0-9]?)?$/;
              if (
                amtRegex.test(this.state.amount) &&
                this.state.amount !== ""
              ) {
                Alert.alert(
                  "Confirm submission",
                  "Are you sure that the details and amounts have been typed correctly?",
                  [
                    {
                      text: "OK",
                      onPress: () =>
                        this.props.navigation.navigate("Calculate", {
                          people: this.state.selectedContacts.length,
                          description: this.state.description,
                          amount: this.state.amount,
                          result: splitAmt
                        })
                    },
                    {
                      text: "Cancel",
                      style: "destructive"
                    }
                  ]
                );
              } else {
                Alert.alert(
                  "Warning!",
                  "Please ensure that currency input is correct"
                );
              }
            }}
          >
            <Icon type="FontAwesome" name="dollar" />
            <Text>SPLIT BILL</Text>
            <Icon type="FontAwesome" name="dollar" />
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() =>
                this.props.navigation.navigate("Equally", {
                  selectedContacts: this.state.selectedContacts
                })
              }
            >
              <Icon type="FontAwesome5" name="equals" />
              <Text>Equal</Text>
            </Button>
            <Button
              vertical
              onPress={() =>
                this.props.navigation.navigate("Percentage", {
                  selectedContacts: this.state.selectedContacts
                })
              }
            >
              <Icon type="FontAwesome5" name="percentage" />
              <Text>Percent</Text>
            </Button>
            <Button vertical>
              <Icon type="FontAwesome5" name="not-equal" />
              <Text>Unequal</Text>
            </Button>
            <Button vertical active>
              <Icon type="FontAwesome5" name="receipt" />
              <Text>Receipt</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  organize = array => {
    return array.map(function(item, i) {
      return (
        <View key={i}>
          <Text>{item}</Text>
        </View>
      );
    });
  };

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center"
            }
          ]}
        >
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image, googleResponse } = this.state;
    if (!image) {
      return;
    }

    return (
      <View
        style={{
          marginTop: 20,
          width: 250,
          borderRadius: 3,
          elevation: 2
        }}
      >
        <Button
          style={{ marginBottom: 10 }}
          onPress={() => this.submitToGoogle()}
          title="Analyze!"
        />

        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: "hidden"
          }}
        >
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>
        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}
        />

        <Text>Raw JSON:</Text>

        {googleResponse && (
          <Text
            onPress={this._copyToClipboard}
            onLongPress={this._share}
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
          >
            JSON.stringify(googleResponse.responses)}
          </Text>
        )}
      </View>
    );
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = item => {
    <Text>response: {JSON.stringify(item)}</Text>;
  };

  _share = () => {
    Share.share({
      message: JSON.stringify(this.state.googleResponse.responses),
      title: "Check it out",
      url: this.state.image
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied to clipboard");
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };

  submitToGoogle = async () => {
    try {
      this.setState({ uploading: true });
      let { image } = this.state;
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "TEXT_DETECTION", maxResults: 5 },
              { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 }
            ],
            image: {
              source: {
                imageUri: image
              }
            }
          }
        ]
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
          Environment["GOOGLE_CLOUD_VISION_API_KEY"],
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({
        googleResponse: responseJson,
        uploading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
}

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  blob.close();

  return await snapshot.ref.getDownloadURL();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },

  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },

  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  }
});
