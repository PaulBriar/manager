import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCrxAMErFm6sQy16xvap1DR-7fXXxo83gc',
      authDomain: 'manager-2080d.firebaseapp.com',
      databaseURL: 'https://manager-2080d.firebaseio.com',
      projectId: 'manager-2080d',
      storageBucket: 'manager-2080d.appspot.com',
      messagingSenderId: '34368121209',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header headerText="Manager" />
        <LoginForm />
      </Provider>
    );
  }
}
