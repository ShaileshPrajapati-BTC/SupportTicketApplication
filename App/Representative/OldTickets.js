import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,
        Header, Title, Button, Icon, Text} from 'native-base';


export default class OldTickets extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id
        }
      })
    }

    render() {
      return(
            <Container>
              <Content>
                <List>
                  <ListItem button onPress={() => this._navigate('RTicketDetail')}>
                    <Thumbnail size={65} source={require('../Images/user.png')} />
                    <Text >Need Help For Komatsu PC 210 Help For Komatsu PC 210</Text>
                    <Text note>10 days </Text>
                  </ListItem>

                  <ListItem button onPress={() => this._navigate('RTicketDetail')}>
                    <Thumbnail size={65} source={require('../Images/user.png')} />
                    <Text >Urgent Help For Power Transmission & Distribution</Text>
                    <Text note>20 days </Text>
                  </ListItem>
                </List>
          </Content> 
        </Container>
        );
    }
}
