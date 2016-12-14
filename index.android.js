
import React, { Component } from 'react';
import Route from './App/Actions/Routes.js';

import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,BackAndroid
 } from 'react-native';
var navigator;

export default class ServiceFinder extends Component {
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        ref={(nav) => { navigator = nav; }}
        initialRoute={{ name: 'Login' }}
        renderScene={ Route.renderScene }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }
}

AppRegistry.registerComponent('ServiceFinder', () => ServiceFinder);
