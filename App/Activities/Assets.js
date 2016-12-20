import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Badge,Picker,Icon,InputGroup,Input,Button,Footer,FooterTab } from 'native-base';

import {View} from 'react-native';
import Drawer from './Drawer/Drawer.js'

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

  render_assets() {
    return (
        <Container>
          <View style={{flex:1}}>
            <Content>
               <List dataArray={asset_data}
                  renderRow={(asset) =>
                    <ListItem>
                      <Text button onPress={ () => this._navigate('AssetTickets',asset)}>{asset.asset}</Text>
                      <Text note>{asset.id}</Text>
                    </ListItem>
                  }>
              </List>
            </Content>
            <ActionButton
              buttonColor="rgb(49,27,146)"
              offsetX={15}
              offsetY={15}
              icon={<Icon name="md-help" style={{ color: 'white'}}/>}
              onPress={() => {this._navigate('RaiseTicket')}}
            />            
          </View> 
      </Container>
    );
  }

  render() {
      return(
        <Drawer data={this.render_assets()} navigator={this.props.navigator} Title={'My Assets'}/>
      );
  }
}
