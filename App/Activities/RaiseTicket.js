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
    this.state = {
      selected1:"1"
    };
    
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

  sendRequest(id){
    if(id=='1'){
      ToastAndroid.show('Your Ticket is Raised Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,);
      this._navigate('Home');
    }
    else{
      ToastAndroid.show('Your Ticket is Cancelled',ToastAndroid.LONG,ToastAndroid.CENTER,);
      this.props.navigator.pop(); 
    }
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
            <View style={{top:20}}>            
              <List>
                <Text style={{left:29}}>Assets Type</Text>
                <ListItem >
                  <Picker
                    style={{width:320,right:5}}
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Item label="Hydraulic Excavators" value="1" />
                    <Item label="Aggregate Crushers" value="2" />
                    <Item label="Loader Backhoes" value="3" />
                    <Item label="Compactor" value="4" />
                 </Picker>
                </ListItem>
                
                <ListItem>
                  <InputGroup>
                    <Input stackedLabel label="Asset Identification Number" keyboardType="numeric"/>
                  </InputGroup>
                </ListItem>

                <ListItem>
                  <InputGroup >
                    <Input multiline={true} stackedLabel label="Description"/>
                  </InputGroup>
                </ListItem>
              </List>
            <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20,marginBottom:20,width:100 }}
                onPress={() => this.sendRequest('1')}>
                  Ok
              </Button>
              <Button style={{backgroundColor:'#808080', alignSelf: 'center', marginTop: 20,marginBottom:20,width:100,left:15 }}
                onPress={() => this.sendRequest('2')}>
                  Cancel
              </Button>
            </View>
            </View>
          </Content> 
      </Container>
    );
  }
}
