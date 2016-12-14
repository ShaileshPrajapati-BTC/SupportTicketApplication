import React,{Component} from 'react';

import Login from '../Activities/Login.js';
import Home from '../Activities/Home.js';
import TicketDetail from '../Activities/TicketDetail.js';
import Assets from '../Activities/Assets.js';

exports.renderScene = function(route, navigator) {
  if(route.name == 'Login') {
    return <Login navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'Home') {
    return <Home navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'TicketDetail') {
    return <TicketDetail navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'Assets') {
    return <Assets navigator={navigator} {...route.passProps}  />
  }
};

