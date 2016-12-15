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


export default class CurrentTickets extends Component {

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
          <Image
            styleName="small rounded-corners"
            source={require('../Images/user.png')}
          />
          <View styleName="vertical stretch space-between">
            <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
            <Caption>June 21  ·  20:00</Caption>
          </View>
          <Button styleName="right-icon"><Icon name="md-checkmark-circle" style={{color:'green'}}/></Button>
          <Button styleName="right-icon"><Icon name="md-close-circle" style={{color:'red'}}/></Button>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
      );
    }
    render() {
      return(
        <Screen>
        
          <ListView
            data={[1,2,3,4,5,6]}
            renderRow={ticket => this.renderRow(ticket)}
          />
      </Screen>
        );
    }
}
