import React, {Component} from 'react';
import {
  View,Text,
  ScrollView,Navigator
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tabs from './rtabs';
import OldTickets from '../OldTickets.js';
import CurrentTickets from '../CurrentTickets.js';

const old_ticket_data =[
{
  name:"Walchand Hirachand",
  date:"Dec 18  ·  18:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654321"
},
{
  name:"Kishor Patil",
  date:"Dec 15  ·  12:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654321"
},
{
  name:"Vikram Pandit",
  date:"Dec 12  ·  07:00",
  asset:"Submersible Pump Impeller",
  id:"987654323"
},

{
  name:"Rajendra Pawar",
  date:"Dec 11  ·  08:00",
  asset:"CI Pump Casting",
  id:"987654324"
},
{
  name:"Deepak Ghaisas",
  date:"Dec 8  ·  09:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654325"
},
{
  name:"Kiran Karnik",
  date:"Dec 6  ·  07:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654327"
},

{
  name:"Azim Premji",
  date:"Dec 1  ·  08:00",
  asset:"Pelton Turbines",
  id:"987654328"
},
{
  name:"Rahul Bajaj",
  date:"Nov 28  ·  09:00",
  asset:"Submersible Pump Impeller",
  id:"987654323"
}
];


const assign_ticket_data =[
{
  name:"Nishikant Kamat",
  date:"Dec 15  ·  18:00",
  asset:"Submersible Pump Impeller",
  id:"987654323"
},
{
  name:"Prabhakar Panshikar",
  date:"Dec 10  ·  12:00",
  asset:"CI Pump Casting",
  id:"987654324"
},
{
  name:"Sanjay Narvekar",
  date:"Dec 8  ·  07:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654325"
},
{
  name:"Shreyas Talpade",
  date:"Nov 25  ·  18:00",
  asset:"Pelton Turbines",
  id:"987654326"
},
{
  name:"Prabhakar Panshikar",
  date:"Nov 22  ·  12:00",
  asset:"CI Pump Casting",
  id:"987654324"
},
{
  name:"Siddharth Jadhav",
  date:"Nov 12  ·  07:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654327"
},
{
  name:"Nishikant Kamat",
  date:"Nov 8 ·  18:00",
  asset:"Pelton Turbines",
  id:"987654328"
},
{
  name:"Vikram Gokhale",
  date:"Nov  3 ·  12:00",
  asset:"Submersible Pump Impeller",
  id:"987654323"
},
{
  name:"Sanjay Narvekar",
  date:"Nov 1  ·  07:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654321"
}


];
export default class HomeTab extends Component{

   render() {
    let Tabname = ["Open","Closed","Assigned"];
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        initialPage={this.props.index}
        renderTabBar={() => <Tabs name={Tabname} />}
      >
        <ScrollView tabLabel="page">
          <CurrentTickets navigator={this.props.navigator}/>
        </ScrollView>
        <ScrollView tabLabel="page-delete">
          <OldTickets navigator={this.props.navigator} data={old_ticket_data}/>
        </ScrollView>
        <ScrollView tabLabel="page-filled">
          <OldTickets navigator={this.props.navigator} data={assign_ticket_data}/>
        </ScrollView>
    </ScrollableTabView>
    );

  }
}
