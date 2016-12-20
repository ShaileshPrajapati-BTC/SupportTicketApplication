import React,{Component} from 'react';

import { Container, Content, ListItem, List, Text, Icon, Badge, Thumbnail } from 'native-base';

import {
  View,Image,AsyncStorage
} from 'react-native'

import StarRating from 'react-native-star-rating';

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
          
          <View style={{flex:1,flexDirection:'row',padding:10,top:80}}>
              <Text style={{color:'white',left:15}}>Laxmikant Berde</Text>
              <View style={{top:30,right:100}}>
               <StarRating
                  disabled={true}
                  starSize={15}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={3}
                  starColor={'yellow'}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}

                /> 
              </View>
          </View>

          
        </Image>

        <List>

          <ListItem button onPress={ () => this._navigate('RAssets') }> 
            <Icon name="md-list-box" style={{ color: '#311b92' }} />
            <Text style={{left:10}}>My Assets</Text>
          </ListItem>

          <ListItem button onPress={ () => this._navigate('RHome') }> 
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
