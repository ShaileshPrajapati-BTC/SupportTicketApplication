import React,{Component} from 'react';

import Login from '../Activities/Login.js';
import Home from '../Activities/Home.js';
import TicketDetail from '../Activities/TicketDetail.js';
import Assets from '../Activities/Assets.js';
import AddAsset from '../Activities/AddAsset.js';
import RaiseTicket from '../Activities/RaiseTicket.js';
import Feedback from '../Activities/Feedback.js';
import RHome from '../Representative/RHome.js';
import RTicketDetail from '../Representative/TicketDetail.js';


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
  if(route.name == 'AddAsset') {
    return <AddAsset navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'RaiseTicket') {
    return <RaiseTicket navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'Feedback') {
    return <Feedback navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'RHome') {
    return <RHome navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'RTicketDetail') {
    return <RTicketDetail navigator={navigator} {...route.passProps}  />
  }
};

