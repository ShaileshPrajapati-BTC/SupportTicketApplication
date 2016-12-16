import React,{Component} from 'react';

import { Container, Content, CardItem, Card, Text, Icon, Badge, Thumbnail } from 'native-base';

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
    this.props.navigator.push({
      name: name,
    })
  }

  render() {
    let {closeDrawer} = this.props
    return (
     <Container backgroundColor='white'>
      <Content>
        <Image style={{ height: 150}}source={{uri: 'https://fedoraproject.org/w/uploads/6/6b/Artwork_F8Themes_Infinity_Round3Scratch_infinitelines-plain.png'}}>
          <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
              <Text style={{top:10,color:'white'}}>Shailesh Prajapati</Text>
          </View>
        </Image>

        <Card>

          <CardItem button onPress={ () => this._navigate('Assets') }> 
            <Icon name="md-send" style={{ color: '#311b92' }} />
            <Text>Raise Support Ticket</Text>
          </CardItem>

          <CardItem button onPress={ () => this._navigate('Home') }> 
            <Icon name="md-document" style={{ color: '#311b92' }} />
            <Text>Tickets</Text>
          </CardItem>

          <CardItem iconLeft button onPress={ () => this._navigate('Login') }>
            <Icon name="md-log-out" style={{ color: '#311b92' }} />
            <Text>Logout</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    )
  }
}
