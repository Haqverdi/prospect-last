import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  Text,
  Modal,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from 'react-native-gradient-buttons';

// social buttons
import Social from '../../components/Social';

// styles
import { styles, formStyles } from './style';

// components
import Logo from '../../components/Logo';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Logo />
          {/* <Form
            onChange={this.props.handleInput}
            onSubmit={this.props.onLogin}
          /> */}
          <View style={formStyles.container}>
            {/* email */}
            <View style={formStyles.SectionStyle}>
              <Icon style={formStyles.ImageStyle} name="md-person" size={20} />
              <TextInput
                style={formStyles.input}
                placeholder="Email address"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                onChangeText={text => {
                  this.props.onChange('email', text);
                }}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
            </View>
            {/* password */}
            <View style={formStyles.SectionStyle}>
              <Icon style={formStyles.ImageStyle} name="md-lock" size={20} />
              <TextInput
                style={formStyles.input}
                placeholder="Password"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                onChangeText={text => {
                  this.props.onChange('password', text);
                }}
                ref={'txtPassword'}
                onSubmitEditing={this.props.onLogin}
              />
            </View>
            {/* forgot password */}
            <View style={formStyles.forgotPasswordContainer}>
              <Text
                style={formStyles.forgotPasswordText}
                onPress={() => {
                  // this.props.navigation.navigate('Home');
                  this.setModalVisible(true);
                }}>
                Forgot password
              </Text>
            </View>
            {/* sing in button */}
            <GradientButton
              textStyle={{
                fontSize: 18,
              }}
              text="SIGN IN"
              gradientBegin="#e99b42"
              gradientEnd="#ee6c2a"
              height={60}
              width={250}
              radius={10}
              gradientDirection="vertical"
              onPressAction={this.props.onLogin}
            />
            {/* other methods */}
            <Social />
            <View>
              <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.modalVisible}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text>Password Change template </Text>

                    <TouchableHighlight
                      style={{
                        borderColor: 'green',
                        borderWidth: 3,
                        backgroundColor: 'green',
                        margin: 20,
                      }}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text style={{ textAlign: 'center' }}>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
