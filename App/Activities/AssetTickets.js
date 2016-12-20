import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,
         Text,Icon, Header,Button,Title,Badge } from 'native-base';


import {
  StatusBar,View,ToastAndroid,BackAndroid
} from 'react-native';
import ActionButton from 'react-native-action-button';


export default class AssetTickets extends Component {

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
  _navigate(name,id,ticket) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id,
          ticket:ticket
        }
      })
    }

    render() {
      const ticket_data =[
        {
          name:"Santosh Sharama",
          date:"Dec 15  ·  18:00",
          asset:this.props.asset.asset,
          id:'987654321',
          rate:3
        },
        {
          name:"Shailesh Prajapati",
          date:"Dec 14  ·  12:00",
          asset:this.props.asset.asset,
          id:'987654322',
          rate:3.5
        },
        {
          name:"Chetan Tomar",
          date:"Dec 11  ·  07:00",
          asset:this.props.asset.asset,
          id:'987654323',
          rate:4
        }
        ];
      return(
        <Container>
          <Header backgroundColor="#311b92">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Tickets</Title>
          </Header>
           <StatusBar
           backgroundColor="#4527a0"
           barStyle="light-content"
          />
          <View style={{flex:1}}>
          <Content>
              <List dataArray={ticket_data}
                  renderRow={(ticket) =>
                    <ListItem>
                      <Text button onPress={ () => this._navigate('TicketDetail',1,ticket)}>{this.props.asset.asset}</Text>
                      <Text note style={{right:70}}>{ticket.date}</Text>
                      <Badge success>Resolved</Badge>
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
}
