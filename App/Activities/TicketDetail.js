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
              <View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'center',left:10,height:100}}>
                <Image source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} style={{width: 60, height: 60,borderRadius: 30}}/>
                <Text style={{left:10,bottom:10}}>Shailesh Prajapati</Text>
                  <View style={{top:15,right:110}}>
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
                    /> 
                  </View>
               </View>
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

                   <ListItem itemDivider>
                    <Text>Feedback</Text>
                  </ListItem>

                  <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={{uri: 'https://cdn1.iconfinder.com/data/icons/car-service-3/512/worker-512.png' }} />
                            <Text>Santosh</Text>
                            <Text note>April 15, 2016</Text>
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
