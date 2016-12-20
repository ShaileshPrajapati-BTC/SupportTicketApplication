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


export default class OldTickets extends Component {

    _navigate(name,ticket) {
      this.props.navigator.push({
        name: name,
        passProps: {
          data: ticket
        }
      })
    }

    renderRow(ticket) {
      const { onButtonPress } = this.props;

      return (
      <TouchableOpacity onPress={() => this._navigate('RTicketDetail',ticket)}>
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
            data={this.props.data}
            renderRow={ticket => this.renderRow(ticket)}
          />
        </Screen>
        );
    }
}
