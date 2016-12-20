import React,{Component} from 'react';
import { Spinner, Container, Content, List, ListItem, InputGroup,
         Input, Icon, Text, Picker, Button ,
         Thumbnail
       } from 'native-base';

import {AsyncStorage,StatusBar} from 'react-native';
// import FCM from "react-native-fcm";
const Item = Picker.Item;

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // login: true,
      email: '',
      password: '',
      selected1:"1"
      // fcm_token: ""

    };

  }
  checkUser(){
    if(this.state.selected1=="1")
      this._navigate('Assets');
    else
      this._navigate('RHome');
  }
  _navigate(name, index) {
    this.props.navigator.push({
      name: name,
      passProps: {
        index: index
      }
    })
  }

  onValueChange (value: string) {
    this.setState({
      selected1 : value
    });
  }

  render() {
    return (
      <Container >
        <Content>
          <StatusBar
            backgroundColor="#4527a0"
            barStyle="light-content"
          />
          <List style={{ alignSelf: 'center', marginTop: 150, marginBottom: 20,width:300 }} >
            <Thumbnail size={100} style={{ alignSelf: 'center',marginBottom: 20}} source={require('../Images/support.png')}  />
            <ListItem >
              <InputGroup iconRight >
                  <Input placeholder='Email' onChangeText={(text) => {this.setState({email: text})}}/>
              </InputGroup>
            </ListItem>
            <ListItem >
              <InputGroup iconRight >
                  <Input placeholder='Password' secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}}/>
              </InputGroup>
            </ListItem>
                <Picker
                  style={{width:280,left:19}}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label="Customer" value="1" style={{fontSize:12}}/>
                  <Item label="Service Provider" value="2" style={{fontSize:12}} />
               </Picker>
            <Button style={{ backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20,width:100 }} onPress={ () => this.checkUser() }>
             Login
            </Button>
          </List>
          </Content>
      </Container>
    );
  }
}
