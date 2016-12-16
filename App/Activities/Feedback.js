import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Title,Picker,Icon,InputGroup,Input,Button,Header } from 'native-base';

import {
  BackAndroid,
  StatusBar,View,ToastAndroid
} from 'react-native';

import StarRating from 'react-native-star-rating';

const Item = Picker.Item;


export default class Feedback extends Component {

  constructor(props) {
    super(props);
     this.state = {
      starCount: 3
    };
    this._handleBackBtnPress = this._handleBackBtnPress.bind(this);
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

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  sendRequest(){
    ToastAndroid.show('Your Feedback is Successfully Saved',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this._navigate('TicketDetail');    
  }

  onValueChange (value: string) {
    this.setState({
        selected1 : value
    });
  }

  render() {
    return (
        <Container>
          <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='md-close' />
              </Button>
              <Title>Give Feedback</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
          <Content>
            <Thumbnail circle size={80} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} source={require('../Images/support.png')} />           
              <List>
                <ListItem>
                   <StarRating
                  disabled={false}
                  starSize={25}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  starColor={'#311b92'}
                /> 
                </ListItem>
                <ListItem >
                  <Text>Asset Type</Text>
                  <Text note>Pelton Turbine</Text>
                </ListItem>
                <ListItem >
                  <Text>Asset Id</Text>
                  <Text note>987654321</Text>
                </ListItem>
                <ListItem >
                  <Text>Service Provider</Text>
                  <Text note>Shailesh</Text>
                </ListItem>
                <ListItem>
                  <InputGroup >
                    <Input multiline={true} stackedLabel label="Feedback"/>
                  </InputGroup>
                </ListItem>  
              </List>

              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                onPress={() => this.sendRequest()}>
                <Icon name='ios-send' />
                  Give Feedback
              </Button>

          </Content> 
      </Container>
    );
  }
}
