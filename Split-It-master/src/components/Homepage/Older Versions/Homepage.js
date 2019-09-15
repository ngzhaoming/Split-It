import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,
  StatusBar,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomepageHeader from './HomepageHeader';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.topBorder}>
          <HomepageHeader/>
        </View>
        <StatusBar barStyle="light-content" />

        <View style={styles.bottomPage}>
        <View style={styles.firstBox}>
          <TouchableOpacity style={styles.splitButton}>
            <Text style={styles.splitText}>SPLIT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.receiptContainer}>
          <View style={styles.receiptRecordsContainer}>
            <ScrollView style={styles.receiptRecords}>
              <Text>This is a test to see whether this works or not and to see whether the padding righ works and how it works when i go to the next line</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
              <Text>This is a test</Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.HomerowKey}>
            <View>
              <FontAwesomeIcon name="home"
                alignContent='center'
                size={38}
                style={styles.HomerowIcons}
              />
            </View>
            <Text style={styles.HomerowText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.HomerowKey}>
            <View>
              <FontAwesomeIcon name="list-alt"
                alignContent='center'
                size={38}
                style={styles.HomerowIcons}
              />
            </View>
            <Text style={styles.HomerowText}>RECORDS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.HomerowKey}>
            <View>
              <FontAwesomeIcon name="bell"
                alignContent='center'
                size={35}
                style={styles.HomerowIcons}
              />
            </View>
            <Text style={styles.Notification}>NOTIFICATION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.HomerowKey}>
            <View>
              <FontAwesomeIcon name="ellipsis-h"
                alignContent='center'
                size={38}
                style={styles.HomerowIcons}
              />
            </View>
            <Text style={styles.HomerowText}>MORE</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  topBorder: {
    flex: 0.12,
    backgroundColor: 'darkblue',
  },
  bottomPage: {
    flex: 0.88,
    backgroundColor: 'lightsteelblue',
  },
  firstBox: {
    flex: 0.3,
    alignItems: 'stretch',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowColor: 'darkgray',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  splitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 5,
    borderColor: 'darkslateblue',
    borderRadius: 10,
    backgroundColor: 'royalblue',
    shadowOpacity: 0.3,
    shadowColor: 'honeydew',
  },
  splitText: {
    fontSize: 72,
    fontFamily: 'IowanOldStyle-Bold',
    fontWeight: 'bold',
    color: 'paleturquoise',
  },
  receiptContainer: {
    flex: 0.59,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  receiptRecordsContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  receiptRecords: {
    fontFamily: 'TimesNewRoman',
  },
  bottomRow: {
    flex: 0.11,
    flexDirection: 'row',
    backgroundColor: 'darkgray',
  },
  HomerowKey: {
    flex: 0.25,
    backgroundColor: 'black',
    borderColor: 'darkslategray',
    borderWidth: 0.5,
    opacity: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowColor: 'darkgray',
  },
  HomerowIcons: {
    color: 'snow',
  },
  HomerowText: {
    color: 'snow',
    fontFamily: 'ArialRoundedMTBold',
  },
  Notification: {
    marginTop: 7,
    fontSize: 11,
    color: 'snow',
    fontFamily: 'ArialRoundedMTBold',
  },
});