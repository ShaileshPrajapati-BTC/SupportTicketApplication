import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Title,Picker,Icon,InputGroup,Input,Button,Header } from 'native-base';

import {
  AsyncStorage,Modal,
  StatusBar,View,ToastAndroid,Dimensions,Image,ScrollView
} from 'react-native';

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

  sendRequest(){
    ToastAndroid.show('Your Asset is Added Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this._navigate('Assets');    
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
              <Title>Add Asset</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
          <Content>
            <Thumbnail circle size={80} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} source={require('../Images/asset.png')} />
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
                    <Input multiline={true} stackedLabel label="Companay Name"/>
                  </InputGroup>
                </ListItem>
              </List>

              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                onPress={() => this.sendRequest()}>
                <Icon name='ios-send' />
                  Add Asset
              </Button>

          </Content> 
      </Container>
    );
  }
}
