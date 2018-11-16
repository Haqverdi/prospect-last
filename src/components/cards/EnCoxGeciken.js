import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Text, Content, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class TabContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.data;
    return (
      <Container style={{ backgroundColor: '#f0f0f0' }}>
        <Content padder>
          <Card style={styles.cardContainer}>
            <CardItem header style={styles.header}>
              <Text style={{ color: '#000' }}>Ən çox gecikən</Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  alert('test');
                }}>
                <Icon
                  name="ellipsis-h"
                  size={20}
                  style={{ color: '#bcbcbc' }}
                />
              </TouchableWithoutFeedback>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Text
                    style={{ fontSize: 24, color: '#000', fontWeight: 'bold' }}>
                    Agahuseyn Balabeyov
                  </Text>
                </Row>
                <Row>
                  <Text style={{ color: '#cdcdcd', fontSize: 16 }}>
                    1s. 34 dəq.
                  </Text>
                </Row>
                <Row>
                  <Text style={{ color: 'red' }}>
                    Ay ərzində:
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>
                      10 dəfə
                    </Text>
                  </Text>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// styles
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    borderColor: '#fff',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#eeeeee',
    shadowOffset: { height: 5, width: 5 },
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#fbfbfb',
    borderBottomWidth: 2,
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
