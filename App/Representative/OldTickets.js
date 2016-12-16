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

const ticket_data =[
{
  name:"Santosh Sharama",
  date:"Dec 8  ·  18:00"
},
{
  name:"Shailesh Prajapati",
  date:"Dec 9  ·  12:00"
},
{
  name:"Chetan Tomar",
  date:"Dec 10  ·  07:00"
},

{
  name:"Ankur Vyas",
  date:"Dec 11  ·  08:00"
},
{
  name:"Jay Pandya",
  date:"Dec 11  ·  09:00"
}
];
export default class OldTickets extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id
        }
      })
    }

    renderRow(ticket) {
      const { onButtonPress } = this.props;

      return (
      <TouchableOpacity onPress={() => this._navigate('RTicketDetail')}>
        <Row>
          <Icon  name="md-document" />
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
