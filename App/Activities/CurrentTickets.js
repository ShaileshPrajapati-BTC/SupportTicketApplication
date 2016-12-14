import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,
        Header, Title, Button, Icon, Text, Badge} from 'native-base';


export default class CurrentTickets extends Component {

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

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Need Help For Komatsu PC 210 Help For Komatsu PC 210</Text>
                    <Text note>10 days </Text>

                  </ListItem>

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Urgent Help For Power Transmission & Distribution</Text>
                    <Text note>20 days </Text>
                  </ListItem>

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Need Help For Komatsu PC 210 Help For Komatsu PC 210</Text>
                    <Text note>10 days </Text>
                  </ListItem>

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Urgent Help For Power Transmission & Distribution</Text>
                    <Text note>20 days </Text>
                  </ListItem>

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Need Help For Komatsu PC 210 Help For Komatsu PC 210</Text>
                    <Text note>10 days </Text>
                  </ListItem>

                  <ListItem button onPress={() => this._navigate('TicketDetail')}>
                    <Thumbnail size={50} source={{uri:'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png'}} />
                    <Text >Urgent Help For Power Transmission & Distribution</Text>
                    <Text note>20 days </Text>
                  </ListItem>
                </List>
          </Content> 
        </Container>
        );
    }
}
