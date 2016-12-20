import React,{Component} from 'react';

import { Container, Content, ListItem, List, Text, Icon, Badge, Thumbnail } from 'native-base';

import {
  View,Image,AsyncStorage
} from 'react-native'
export default class Menu extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  _navigate(name) {
    let routes = this.props.navigator.getCurrentRoutes();
    if (routes[routes.length-1].name==name){
       this.props.closeDrawer();
    }
    else{
      this.props.closeDrawer();
      this.props.navigator.push({
        name: name,
      })
    }
  }

  render() {
    let {closeDrawer} = this.props
    return (
     <Container backgroundColor='white'>
      <Content>
        <Image style={{ height: 150}} source={require('../../Images/drawer.png')}>
          <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
              <Text style={{top:10,color:'white'}}>Sudhir Joshi</Text>
          </View>
        </Image>

        <List>

          <ListItem button onPress={ () => this._navigate('Assets') }> 
            <Icon name="md-list-box" style={{ color: '#311b92'}} />
            <Text style={{left:10}}>My Assets</Text>
          </ListItem>

          <ListItem button onPress={ () => this._navigate('Home') }> 
            <Icon name="md-document" style={{ color: '#311b92' }} />
            <Text style={{left:10}}>Tickets</Text>
          </ListItem>

          <ListItem button onPress={ () => this._navigate('Login') }>
            <Icon name="md-log-out" style={{ color: '#311b92' }} />
            <Text style={{left:10}}>Logout</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
    )
  }
}
