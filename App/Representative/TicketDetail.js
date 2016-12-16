import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,Modal,BackAndroid,
  StatusBar,View,ToastAndroid,Dimensions,Image
} from 'react-native';



export default class TicketDetail extends Component {

  constructor(props) {
    super(props);
    this._handleBackBtnPress = this._handleBackBtnPress.bind(this)

  }

  componentWillMount(){
    BackAndroid.addEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  _handleBackBtnPress(){
    this.props.navigator.pop();
    return true;
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
         {this.props.id ?
            <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Ticket Details</Title>

              <Button transparent >
                  <Icon name='md-checkmark-circle' />
              </Button>
              <Button transparent>
                  <Icon name='md-close-circle' />
              </Button>
            </Header>:
            <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Ticket Details</Title>
            </Header>
          }
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
   
           <Content>
             <View>
              <List>
                  <ListItem itemDivider>
                    <Text>Asset Detail</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Status</Text>
                     {this.props.id ? <Badge warning>Addressed </Badge> :
                                      <Badge success>  Resolved</Badge> }
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
                    <Text>Customer Contact Detail</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Name</Text>
                    <Text note>Santosh Prajapati</Text>
                  </ListItem> 
                  <ListItem>
                    <Text>Mobile No</Text>
                    <Text note>9876543210</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Location</Text>
                    <Text note>Ahmedabad</Text>
                  </ListItem>

                   <ListItem itemDivider>
                    <Text>Feedback</Text>
                  </ListItem>

                  <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={{uri: 'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png' }} />
                            <Text>Santosh</Text>
                            <Text note>Dec 15, 2016</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Text style={{left:40}}>
                                Thank you very much for your supports
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}} style={{left:30}}>
                                <Icon name="md-star-outline" />
                                <Text>3 stars</Text>
                            </Button>
                        </CardItem>
                   </Card>


              </List>
            </View>
           </Content>
         </Container>
    );
  }
}
