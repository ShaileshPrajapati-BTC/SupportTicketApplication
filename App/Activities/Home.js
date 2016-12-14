import React,{Component} from 'react';
import { Container, Content,Header, Title, Button, Icon, Text,Footer, FooterTab,Badge} from 'native-base';

import {
  AsyncStorage,
  StatusBar,
  RefreshControl
} from 'react-native';

import Drawer from './Drawer/Drawer.js'
import HomeTabs from './Drawer/HomeTab.js'


export default class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
            active: 'true'
        };
    }

    _navigate(name) {
      this.props.navigator.push({
        name: name,
        passProps: {
          name: name
        }
      })
    }
    
    render_home() {
      return(
          <HomeTabs navigator={this.props.navigator} index={this.props.index} />
        );
    }

    render() {
      return(
       <Drawer data={this.render_home()} navigator={this.props.navigator}/>
        );
    }

}
