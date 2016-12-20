import React,{Component} from 'react';
import { Container, Content,Header, Title, Button, Icon, Text,Footer, FooterTab,Badge} from 'native-base';

import {
  AsyncStorage,
  StatusBar,
  RefreshControl,BackAndroid
} from 'react-native';

import Drawer from './Drawer/Drawer.js'
import HomeTabs from './Drawer/HomeTab.js'


export default class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
            active: 'true'
        };
      this._handleBackBtnPress = this._handleBackBtnPress.bind(this);
    }

    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }

  componentWillMount(){
    BackAndroid.addEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  _handleBackBtnPress(){
    console.log('bcalk');
    BackAndroid.exitApp(0);
  }
    
    render_home() {
      return(
          <HomeTabs navigator={this.props.navigator} index={this.props.index} />
        );
    }

    render() {
      return(
       <Drawer data={this.render_home()} navigator={this.props.navigator} Title={'Tickets'}/>
        );
    }

}
