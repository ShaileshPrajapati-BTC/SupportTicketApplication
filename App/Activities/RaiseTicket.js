import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Title,Picker,Icon,InputGroup,Input,Button,Header } from 'native-base';

import {
  StatusBar,View,ToastAndroid,BackAndroid
} from 'react-native';

const Item = Picker.Item;


export default class RaiseTicket extends Component {

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

  sendRequest(){
    ToastAndroid.show('Your Ticket is Raised Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this._navigate('Home');    
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
              <Title>Raise Support Ticket</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
          <Content>
            <Thumbnail circle size={80} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} source={require('../Images/support.png')} />
              <List>
                <ListItem iconLeft>
                  <Icon name="md-list-box" style={{ color: '#4527a0' }} />
                  <Text>Assets Type</Text>
                  <Picker
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={"1"}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Item label="Hydraulic Excavators," value="1" />
                    <Item label="Aggregate Crushers" value="2" />
                    <Item label="Loader Backhoes" value="3" />
                    <Item label="Compactor" value="4" />
                 </Picker>
                </ListItem>

                <ListItem>
                  <InputGroup>
                    <Input placeholder="Asset Identification Number" keyboardType="numeric"/>
                  </InputGroup>
                </ListItem>

                <ListItem>
                  <InputGroup >
                    <Input multiline={true} stackedLabel label="Description"/>
                  </InputGroup>
                </ListItem>
              </List>

              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                onPress={() => this.sendRequest()}>
                <Icon name='ios-send' />
                  Raise Support Ticket
              </Button>

          </Content> 
      </Container>
    );
  }
}
