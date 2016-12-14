import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,Modal,
  StatusBar,View,ToastAndroid,Dimensions,Image
} from 'react-native';


export default class TicketDetail extends Component {

  constructor(props) {
    super(props);
  }

  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        id: this.props.id
      }
    })
  }

  
  render() {
    return (
         <Container>
          <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Ticket Details</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
           <Content>
             <View>
              <List>
                  <ListItem>
                    <Thumbnail circle size={80} source={{uri: 'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png' }} />
                    <Text>Shailesh Prajapati</Text>
                    <Text note>From L&T </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Status</Text>
                    <Badge style={{ backgroundColor: 'green' }}>Resolved</Badge>
                  </ListItem>
                  <ListItem>
                    <Text>Raised Date</Text>
                    <Text note>13-12-2016</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Type</Text>
                    <Text note>Aggregate Crushers</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Identification Number</Text>
                    <Text note>875621620</Text>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text>Representative Contact Detail</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Name</Text>
                    <Text note>Shailesh Prajapati</Text>
                  </ListItem> 
                  <ListItem>
                    <Text>Mobile No</Text>
                    <Text note>9876543210</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Location</Text>
                    <Text note>Ahmedabad</Text>
                  </ListItem>

              </List>
            </View>
           </Content>
         </Container>
    );
  }
}
