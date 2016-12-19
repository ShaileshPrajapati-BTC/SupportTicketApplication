import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text,Icon } from 'native-base';

import{View} from 'react-native';
import Accordion from 'react-native-accordion';
import StarRating from 'react-native-star-rating';


export default class CurrentTickets extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id
        }
      })
    }

    render_content(ticket) {
      const { onButtonPress } = this.props;

      return (
        <View style={{flex:1,flexDirection:'column', justifyContent:'flex-start'}}>
          <Text style={{bottom:5}}>Provider:- Santosh Sharama</Text>
          <Text style={{bottom:5}}>Id:- 9876543210</Text>
          <Text style={{bottom:5}}>Date:- Dec 21 - 20:00</Text>  
       </View>
      
      );
    }
    render() {
      return(
        <Container>
                <Content>
                    <List>
                        <ListItem>
                          <Thumbnail source={require('../Images/note.png')} />
                          <Text button onPress={ () => this._navigate('TicketDetail')}>Pelton Turbine</Text>
                          <Text note>Dec 15 - 20:00</Text>
                          <Accordion
                            underlayColor="white"
                            header={<View><Icon  name="ios-arrow-down-outline" style={{color:'#311b92',left:260,fontSize:20}}/></View>}
                            content={this.render_content()}
                            easing="easeOutCubic"
                          />
                        </ListItem>

                        <ListItem>
                          <Thumbnail source={require('../Images/note.png')} />
                            <Text button onPress={ () => this._navigate('TicketDetail')}>Reaction Turbines</Text>
                            <Text note>Dec 14 - 18:00</Text>
                            <Accordion
                              underlayColor="white"
                              header={<View><Icon  name="ios-arrow-down-outline" style={{color:'#311b92',left:260,fontSize:20}}/></View>}
                              content={this.render_content()}
                              easing="easeOutCubic"
                            />
                        </ListItem>

                        <ListItem>
                          <Thumbnail source={require('../Images/note.png')} />
                            <Text  button onPress={ () => this._navigate('TicketDetail')}>Pelton Turbine</Text>
                            <Text note>Nov 14 - 18:00</Text>
                            <Accordion
                              underlayColor="white"
                              header={<View><Icon  name="ios-arrow-down-outline" style={{color:'#311b92',left:260,fontSize:20}}/></View>}
                              content={this.render_content()}
                              easing="easeOutCubic"
                            />
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}
