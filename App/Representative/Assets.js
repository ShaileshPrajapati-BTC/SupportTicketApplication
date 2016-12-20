import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail,Header,Title,
          Text, Badge,Picker,Icon,InputGroup,Input,Button,Footer,FooterTab } from 'native-base';

import {View,StatusBar,BackAndroid} from 'react-native';
import ActionButton from 'react-native-action-button';


const asset_data =[
{
  asset:'Electric Motor GI Casting Parts',
  id:'987654325',
},
{
  asset:'Water Pump Component',
  id:'987654326',
},
{
  asset:'Submersible Pump Impeller',
  id:'987654327',
},
{
  asset:'Wheel CI Casting',
  id:'987654325',
},
{
  asset:'CI Pump Casting',
  id:'987654326',
},
{
  asset:'Pelton Turbines',
  id:'987654327',
},
{
  asset:'Reaction Turbines',
  id:'987654327',
}
];


export default class Assets extends Component {

  constructor(props) {
    super(props);
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
  _navigate(name,asset) {
    this.props.navigator.push({
      name: name,
      passProps: {
        id: this.props.id,
        asset:asset
      }
    })
  }

  render() {
    return (
        <Container>
          <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>My Asset</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
          <View style={{flex:1}}>
            <Content>
              <List dataArray={asset_data}
                  renderRow={(asset) =>
                    <ListItem>
                      <Text button onPress={ () => this._navigate('RAssetTickets',asset)}>{asset.asset}</Text>
                      <Text note>{asset.id}</Text>
                    </ListItem>
                  }>
              </List>
            </Content>
          <ActionButton
            buttonColor="rgb(49,27,146)"
            offsetX={15}
            offsetY={15}
            icon={<Icon name="md-add" style={{ color: 'white'}}/>}
            onPress={() => {this._navigate('RAddAsset')}}
          />            
          </View> 
      </Container>
    );
  }
}
