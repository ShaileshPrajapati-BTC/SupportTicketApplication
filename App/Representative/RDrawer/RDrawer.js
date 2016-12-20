import React,{Component} from 'react';
import Drawer from 'react-native-drawer'
import Menu from './RMenu.js';
import {
  Text,View, StyleSheet, ToolbarAndroid,DrawerLayoutAndroid,
  TouchableHighlight,ScrollView,Navigator,StatusBar
} from 'react-native';
import { Container, Content,Header, Title, Button, Icon, Tabs, Spinner, Fab} from 'native-base';
import VIcon from 'react-native-vector-icons/Ionicons';

export default class DrawerBar extends Component {

  state={
    drawerOpen: false,
    drawerDisabled: false,
    data:''
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  componentWillUnmount(){
    console.log('close');
  }
  // _onActionSelected = (position) => {
  //   this.props.navigator.push({
  //       name: 'RAddAsset',
  //       passProps: {
  //         name: 'name'
  //       }
  //   })
  // };
  render() {
      return (
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={
            <Menu closeDrawer={this.closeDrawer} navigator={this.props.navigator}/>
          }
          acceptTap
          acceptPan
          tapToClose={true}
          styles={{ main: { shadowColor: '#ff6f00', shadowOpacity: 0.8, shadowRadius: 3}}}
          onOpen={() => {
            console.log('onopen')
            this.setState({drawerOpen: true})
          }}
          onClose={() => {
            console.log('onclose')
            this.setState({drawerOpen: false})
          }}
          captureGestures={true}
          tweenDuration={100}
          panThreshold={0.25}
          panOpenMask = {0.01}
          disabled={this.state.drawerDisabled}
          openDrawerOffset={0.2} 
          closedDrawerOffset={() => 0}
          elevation = {200}
          negotiatePan
          translucent={true}
        >
          <View style={{flex:1, flexDirection: 'column'}} >
            <View style={{backgroundColor: '#311b92',elevation: 3,borderTopColor:'black',borderTopWidth:0.2}} >
              <VIcon.ToolbarAndroid
                navIconName="md-menu"
                title="Tickets"
                titleColor="white"
                onIconClicked={() => {this.openDrawer()}}
              >

                <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                </View>
              </VIcon.ToolbarAndroid>
            </View>
            <StatusBar
             backgroundColor="#4527a0"
             barStyle="light-content"
            />
            {this.props.data}
          </View>
        </Drawer>
      );
  }
}
