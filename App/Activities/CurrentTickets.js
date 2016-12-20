import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text,Icon,Card,CardItem } from 'native-base';

import{View} from 'react-native';
import Accordion from 'react-native-accordion';
import StarRating from 'react-native-star-rating';


const ticket_data =[
{
  name:"Santosh Sharama",
  date:"Dec 15 2016 - 18:00",
  asset:'Electric Motor GI Casting Parts',
  id:'987654321'
},
{
  name:"Shailesh Prajapati",
  date:"Dec 14 2016 - 12:00",
  asset:'Submersible Pump Impeller',
  id:'987654322',

},
{
  name:"Chetan Tomar",
  date:"Dec 11 2016 - 07:00",
  asset:'CI Pump Casting',
  id:'987654323'

},
{
  name:"Chetan Tomar",
  date:"Dec 11 2016 - 07:00",
  asset:'CI Pump Casting',
  id:'987654323'

}
];

export default class CurrentTickets extends Component {

    _navigate(name,id,ticket) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id,
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
