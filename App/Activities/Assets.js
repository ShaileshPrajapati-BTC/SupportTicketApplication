import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Badge,Picker,Icon,InputGroup,Input,Button } from 'native-base';

import {
  AsyncStorage,Modal,
  StatusBar,View,ToastAndroid,Dimensions,Image
} from 'react-native';
import Drawer from './Drawer/Drawer.js'

const Item = Picker.Item;

export default class Assets extends Component {

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

  raiseSupportTicket(){
    ToastAndroid.show('Your Ticket is Raised Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this._navigate('Home');    
  }


  onValueChange (value: string) {
    this.setState({
        selected1 : value
    });
  }
  render_assets() {
    return (
        <Container>
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
                      <Input multiline={true} stackedLabel label="Description"
                      />
                  </InputGroup>
                </ListItem>
              </List>

              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                onPress={() => this.raiseSupportTicket()}>
                <Icon name='ios-send' />
                  Raise Support Ticket
              </Button>

          </Content>   
         </Container>
    );
  }

  render() {
      return(
       <Drawer data={this.render_assets()} navigator={this.props.navigator}/>
        );
  }
}
