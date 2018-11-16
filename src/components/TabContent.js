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
              <Text style={{ color: '#000' }}>{item.delayed.title}</Text>
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
                <Row style={styles.body}>
                  <Col>
                    <Text style={{ fontSize: 50 }}>{item.delayed.count}</Text>
                  </Col>
                  <Col>
                    <Row>
                      <Text style={{ fontSize: 20, color: '#dddddd' }}>
                        {item.delayed.percent}%
                      </Text>
                    </Row>
                    <Row>
                      <Icon
                        name="caret-up"
                        size={12}
                        style={{ color: '#ce5651' }}
                      />
                      <Text style={{ fontSize: 12, color: '#ce5651' }}>
                        {item.delayed.difference}
                      </Text>
                    </Row>
                  </Col>
                  <Col>
                    <Icon
                      name="user"
                      size={50}
                      style={{ color: '#dddddd', marginLeft: 30 }}
                    />
                  </Col>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
