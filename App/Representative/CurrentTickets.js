import React,{Component} from 'react';
import {Icon} from 'native-base';
import {
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,Row,Caption,View,Button
} from '@shoutem/ui';

import Accordion from 'react-native-accordion';

const ticket_data =[
{
  name:"Santosh Sharama",
  date:"Dec 15  ·  18:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654321"
},
{
  name:"Shailesh Prajapati",
  date:"Dec 14  ·  12:00",
  asset:"Water Pump Component",
  id:"987654322"
},
{
  name:"Chetan Tomar",
  date:"Dec 11  ·  07:00",
  asset:"Submersible Pump Impeller",
  id:"987654323"
},

{
  name:"Ankur Vyas",
  date:"Dec 8  ·  08:00",
  asset:"CI Pump Casting",
  id:"987654324"
},
{
  name:"Jay Pandya",
  date:"Dec 6  ·  09:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654325"
},
{
  name:"Anil Patel",
  date:"Dec 4  ·  09:00",
  asset:"Pelton Turbines",
  id:"987654326"
},
{
  name:"Dharmin Shah",
  date:"Dec 2  ·  09:00",
  asset:"Electric Motor GI Casting Parts",
  id:"987654327"
},
{
  name:"Ketan Sharama",
  date:"Nov 28 ·  09:00",
  asset:"Pelton Turbines",
  id:"987654328"
}
];

export default class CurrentTickets extends Component {

    _navigate(name,id,ticket) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id,
          data: ticket
        }
      })
    }

    renderRow(ticket) {
      const { onButtonPress } = this.props;

      return (
      <TouchableOpacity onPress={() => this._navigate('RTicketDetail',1,ticket)}>
        <Row>
          <Icon  name="md-document" style={{color:'#311b92'}}/>
          <View styleName="vertical stretch space-between" style={{left:10}}>
            <Subtitle>{ticket.name}</Subtitle>
            <Caption>{ticket.date}</Caption>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
      );
    }
    render() {
      return(
        <Screen>
        
          <ListView
            data={ticket_data}
            renderRow={ticket => this.renderRow(ticket)}
          />
      </Screen>
        );
    }
}
