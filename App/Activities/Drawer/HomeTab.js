import React, {Component} from 'react';
import {
  View,Text,
  ScrollView,Navigator
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tabs from './tabs';
import OldTickets from '../OldTickets.js';
import CurrentTickets from '../CurrentTickets.js';


export default class HomeTab extends Component{

   render() {
    let Tabname = ["Open Tickets","Closed Tickets"];
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        initialPage={this.props.index}
        renderTabBar={() => <Tabs name={Tabname} />}
      >
        <ScrollView tabLabel="md-construct">
          <CurrentTickets navigator={this.props.navigator}/>
        </ScrollView>
        <ScrollView tabLabel="md-done-all">
          <OldTickets navigator={this.props.navigator}/>
        </ScrollView>
    </ScrollableTabView>
    );

  }
}
