import * as React from 'react';
import { AsyncStorage } from 'react-native';
import Sidebar from '../../screens/Sidebar';

export default class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this._signOut = this._signOut.bind(this);
  }
  // logout
  _signOut = () => {
    AsyncStorage.removeItem('Token', err => {
      if (err) {
        console.log(err);
      }
    });
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <Sidebar navigation={this.props.navigation} onLogout={this._signOut} />
    );
  }
}
