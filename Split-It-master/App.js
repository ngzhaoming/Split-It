import React, { Component } from 'react';
import FirebaseDetails from './src/components/FirebaseDetails';
import * as firebase from 'firebase';
import Navigation from './src/components/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './store';

firebase.initializeApp(FirebaseDetails.FirebaseConfig);

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}