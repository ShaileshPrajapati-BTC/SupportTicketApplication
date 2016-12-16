import React,{Component} from 'react';

import { Container, Content, CardItem, Card, Text, Icon, Badge, Thumbnail } from 'native-base';

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
          
          <View style={{flex:1,flexDirection:'row',padding:10,top:80}}>
              <Image source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} style={{width: 50, height: 50,borderRadius: 25}}/>
              <Text style={{color:'white',left:10}}>Shailesh Prajapati</Text>
              <View style={{top:30,right:110}}>
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

        <Card>

          <CardItem button onPress={ () => this._navigate('RHome') }> 
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
