import * as React from 'react';
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
  }

  login = () => {
    if (
      minLength(7, this.state.password) &&
      maxLength(15, this.state.password) &&
      email(this.state.email)
    ) {
      this.props.navigation.navigate('Drawer');
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
