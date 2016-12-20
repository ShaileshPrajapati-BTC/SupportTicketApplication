import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  BackAndroid,StatusBar,View,ToastAndroid,Image
} from 'react-native';

import StarRating from 'react-native-star-rating';

export default class TicketDetail extends Component {

  constructor(props) {
    super(props);
    this._handleBackBtnPress = this._handleBackBtnPress.bind(this);
  }

  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        id: this.props.id
      }
    })
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
  
  render() {
    return (
         <Container>
          <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Ticket Details</Title>
              <Button transparent onPress={() => {this._navigate('Feedback')}}>
                  <Icon name='md-chatbubbles' />
              </Button>
          </Header>
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
                     {this.props.id ? <Badge success>Resolved</Badge> :
                                      <Badge warning> Addressed </Badge> }
                  </ListItem>
                  <ListItem>
                    <Text>Raised Date</Text>
                    <Text note>{this.props.ticket.date}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Name</Text>
                    <Text note>{this.props.ticket.asset}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Identification Number</Text>
                    <Text note>{this.props.ticket.id}</Text>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text>Representative Contact Detail</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Name</Text>
                    <Text note>{this.props.ticket.name}</Text>
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
                  <ListItem>
                      <Thumbnail source={require('../Images/user.png')} />
                      <Text>Customer</Text>
                      <Text note>April 15, 2016</Text>
                      <View style={{width:80}}>
                      <StarRating
                        disabled={true}
                        starSize={15}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={this.props.ticket.rate}
                        starColor={'#311b92'}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                      /></View>
                  </ListItem>
                  <ListItem cardBody> 
                      <Text style={{left:40}}>
                          Thank you very much for your supports
                      </Text>
                      
                  </ListItem>
              </List>
            </View>
           </Content>
         </Container>
    );
  }
}
