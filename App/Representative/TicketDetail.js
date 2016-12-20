import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,Modal,BackAndroid,
  StatusBar,View,ToastAndroid,Dimensions,Image
} from 'react-native';
import StarRating from 'react-native-star-rating';



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

  ticket_req(id){
    if (id==1)
      ToastAndroid.show('Ticket is Accepted',ToastAndroid.LONG,ToastAndroid.CENTER,);
    else
      ToastAndroid.show('Ticket is Rejected',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this.props.navigator.pop()
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
                  <Icon name='md-checkmark' onPress={() => {this.ticket_req(1)}}/>
              </Button>
              <Button transparent>
                  <Icon name='md-close' onPress={() => {this.ticket_req(2)}}/>
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
                    <Text note>{this.props.data.date}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Name</Text>
                    <Text note>{this.props.data.asset}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Asset Identification Number</Text>
                    <Text note>{this.props.data.id}</Text>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text>Customer Contact Detail</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Name</Text>
                    <Text note>{this.props.data.name}</Text>
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
                      <Thumbnail source={{uri: 'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png' }} />
                      <Text>{this.props.data.name}</Text>
                      <Text note>{this.props.data.date}</Text>
                      <View style={{width:80}}>
                      <StarRating
                        disabled={true}
                        starSize={15}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={3}
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
