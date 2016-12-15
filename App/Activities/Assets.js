import React,{Component} from 'react';
import {  Container, Content, List, ListItem, Thumbnail, 
          Text, Badge,Picker,Icon,InputGroup,Input,Button,Footer,FooterTab } from 'native-base';


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

  render_assets() {
    return (
        <Container>
           <Content>
            <List>

              <ListItem itemDivider>
                <Text>Assets</Text>
              </ListItem> 

              <ListItem button>
                  <Text>Turbine</Text>
                  <Text note>9876543210</Text>
              </ListItem>
              <ListItem >
                  <Text>Pelton Turbine</Text>
                  <Text note>9876543211</Text>
              </ListItem>
              <ListItem >
                  <Text>Reaction Turbines</Text>
                  <Text note>9876543212</Text>
              </ListItem>
              <ListItem >
                  <Text>Turbine</Text>
                  <Text note>9876543210</Text>
              </ListItem>
              <ListItem >
                  <Text>Pelton Turbine</Text>
                  <Text note>9876543211</Text>
              </ListItem>
              <ListItem >
                  <Text>Reaction Turbines</Text>
                  <Text note>9876543212</Text>
              </ListItem>
              <ListItem >
                  <Text>Turbine</Text>
                  <Text note>9876543210</Text>
              </ListItem>
              <ListItem >
                  <Text>Pelton Turbine</Text>
                  <Text note>9876543211</Text>
              </ListItem>
              <ListItem >
                  <Text>Reaction Turbines</Text>
                  <Text note>9876543212</Text>
              </ListItem>

            </List>  
          </Content> 

          <Footer style={{backgroundColor:'#311b92'}}>
            <FooterTab>
                <Button active onPress={ () =>this._navigate('AddAsset')}>
                    Add Assets
                    <Icon name='md-add-circle' />
                </Button>
                <Button active onPress={ () =>this._navigate('RaiseTicket')}>
                    Need Support
                    <Icon name='md-help-circle' />
                </Button>
            </FooterTab>
        </Footer> 

      </Container>
    );
  }

  render() {
      return(
        <Drawer data={this.render_assets()} navigator={this.props.navigator}/>
      );
  }
}
