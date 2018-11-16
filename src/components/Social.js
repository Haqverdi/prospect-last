import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* text */}
        <View style={styles.otherMethodSignTextContainer}>
            <Text style={styles.otherMethodSignText}>or use one of this</Text>
        </View>
        {/* logos */}
        <View style={styles.socialLogos}>
            <TouchableOpacity onPress={() => {console.log('Facebook');}}>
                <Icon name="facebook-square" size={55} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log('linkedin');}}>
                <Icon name="linkedin-square" size={55} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log('google plus');}}>
                <Icon name="google-plus-square" size={55} color="#fff" />
            </TouchableOpacity>
        </View>
        {/* demo or sign up */}
        <View style={styles.demoContainer}>
            <Text style={styles.demoText} onPress={() => { console.log('Demo clicked'); }} >Try DEMO version</Text>
            <Text style={styles.orText}>or</Text>
            <Text style={styles.demoText} onPress={() => { console.log('Sing up clicked'); }} >Sign up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    // other methods
    otherMethodSignTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 250,
        marginVertical: 10,
    },
    socialLogos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        marginBottom: 10,
    },
    otherMethodSignText: {
        fontSize: 16,
        color: '#fff',
    },
    // demo
    demoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 255,
        marginBottom: 10,
    },
    demoText: {
        fontSize: 18,
        color: '#fff',
        textDecorationLine: 'underline',
        marginHorizontal: 5,
    },
    orText: {
        fontSize: 16,
        color: '#fff',
    },
});