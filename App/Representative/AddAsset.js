import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Title,Picker,Icon,InputGroup,Input,Button,Header } from 'native-base';

import {
  StatusBar,View,ToastAndroid,BackAndroid
} from 'react-native';

const Item = Picker.Item;


export default class Assets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected1:"1"
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

  sendRequest(){
    ToastAndroid.show('Your Asset is Added Successfully',ToastAndroid.LONG,ToastAndroid.CENTER,);
    this.props.navigator.pop();
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
                    <Input stackedLabel label="Asset Name"/>
                  </InputGroup>
                </ListItem>

                <ListItem>
                  <InputGroup>
                    <Input stackedLabel label="Asset Identification Number" keyboardType="numeric"/>
                  </InputGroup>
                </ListItem>

                <ListItem>
                  <InputGroup >
                    <Input multiline={true} stackedLabel label="Company Name"/>
                  </InputGroup>
                </ListItem>
              </List>

              <Button style={{backgroundColor:'#4527a0', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                onPress={() => this.sendRequest()}>
                  Add Asset
              </Button>
            </View>
          </Content> 
      </Container>
    );
  }
}
