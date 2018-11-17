import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { Toast } from 'native-base';
import Login from '../../screens/Login';

// validation helpers
const minLength = (min, value) => {
  return value.length > min ? true : false;
};
const maxLength = (max, value) => {
  return value.length < max ? true : false;
};
const email = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? false
    : true;
};

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.login = this.login.bind(this);
    this._setToken = this._setToken.bind(this);
    this._autoLogin();
  }

  _setToken = async email => {
    try {
      await AsyncStorage.setItem('Token', email);
    } catch (error) {
      Toast.show({
        text: 'Error with sign in',
        duration: 2000,
        position: 'top',
        textStyle: {
          textAlign: 'center',
        },
      });
    }
  };

  _autoLogin = async () => {
    try {
      const userToken = await AsyncStorage.getItem('Token');
      this.props.navigation.navigate(userToken ? 'Drawer' : 'Login');
    } catch (error) {
      console.log(error);
    }
  };

  login = async () => {
    if (
      minLength(7, this.state.password) &&
      maxLength(15, this.state.password) &&
      email(this.state.email)
    ) {
      await this._setToken(this.state.email);
      this.props.navigation.navigate('Drawer', { email: this.state.email });
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2000,
        position: 'top',
        textStyle: {
          textAlign: 'center',
        },
      });
    }
  };

  // update state
  handleInput = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    return (
      <Login
        navigation={this.props.navigation}
        onLogin={this.login}
        onChange={this.handleInput}
      />
    );
  }
}

export default LoginContainer;
