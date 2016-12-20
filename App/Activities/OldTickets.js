import React,{Component} from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text,Icon } from 'native-base';

import{View} from 'react-native';
import Accordion from 'react-native-accordion';
import StarRating from 'react-native-star-rating';

const ticket_data =[
{
  name:"Ankur Vyas",
  date:"Dec 8 2016 - 10:00",
  asset:'Wheel CI Casting',
  id:'987654325',
  rate:3
},
{
  name:"Jay Pandya",
  date:"Dec 2 2016 - 11:00",
  asset:'Water Pump Component',
  id:'987654326',
  rate:3.5
},
{
  name:"Anil Patel",
  date:"Nov 25 2016 - 07:00",
  asset:'Reaction Turbines',
  id:'987654327',
  rate:4
},
{
  name:"Pratik Mehta",
  date:"Nov 20 2016 - 11:00",
  asset:'Water Pump Component',
  id:'987654326',
  rate:3.5
}
];

export default class OldTickets extends Component {

  _navigate(name,id,ticket) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: 1,
          ticket:ticket
        }
      })
    }

    render_content(ticket) {
      const { onButtonPress } = this.props;

      return (
        <View style={{flex:1,flexDirection:'column', justifyContent:'flex-start'}}>
          <Text style={{bottom:5}}>Provider:- {ticket.name}</Text>
          <Text style={{bottom:5}}>Id:- {ticket.id}</Text>
          <Text style={{bottom:5}}>Date:- {ticket.date}</Text>  
          <Text style={{bottom:5}}>Feedback:- Thank You for urgent support </Text>
          <StarRating
                  disabled={true}
                  starSize={15}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={ticket.rate}
                  starColor={'#311b92'}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
      </View>
      
      );
    }
    render() {
      return(
        <Container>
                <Content >
                    <Card  dataArray={ticket_data}
                        renderRow={(ticket) =>
                             <Card style={{width:340,left:8}}>
                              <CardItem button onPress={ () => this._navigate('TicketDetail','',ticket)}>
                              <Text style={{bottom:5,left:5,fontSize:18}} >{ticket.asset}</Text>
                              <Text style={{bottom:5,left:5,fontSize:13}}><Icon name='ios-contact' style={{fontSize: 15}}/> {ticket.name}</Text>
                              <Text style={{bottom:5,left:5,fontSize:13}}>Id:- {ticket.id}</Text>            
                              <Text style={{left:5}}note><Icon name='md-time' style={{fontSize: 15}}/> {ticket.date}</Text>
                            </CardItem>
                          </Card>
                        }>
                    </Card>
                </Content>
            </Container>
        );
    }
}
