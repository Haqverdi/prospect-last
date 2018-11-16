import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Container, Text, Content, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { PieChart } from 'react-native-svg-charts';

export default class TabContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      {
        key: 1,
        amount: 28,
        svg: { fill: '#68c298' },
      },
      {
        key: 2,
        amount: 72,
        svg: { fill: '#c85f4c' },
      },
    ];
    const item = this.props.data;
    return (
      <Container style={{ backgroundColor: '#f0f0f0' }}>
        <Content padder>
          <Card style={styles.cardContainer}>
            <CardItem header style={styles.header}>
              <Text style={{ color: '#000' }}>Gəlməyənlərin sayı</Text>
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
                <Col>
                  <PieChart
                    style={{ height: 130 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    spacing={0}
                    outerRadius={'70%'}
                  />
                </Col>
                <Col>
                  <Row
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="circle"
                      size={10}
                      style={{ color: '#68c298', marginHorizontal: 5 }}
                    />
                    <Text>22549 &#8380;</Text>
                  </Row>
                  <Row>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 20,
                        color: '#bcbcbc',
                      }}>
                      Faktiki
                    </Text>
                  </Row>
                  <Row
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="circle"
                      size={10}
                      style={{ color: '#c85f4c', marginHorizontal: 5 }}
                    />
                    <Text>22549 &#8380;</Text>
                  </Row>
                  <Row>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 20,
                        color: '#bcbcbc',
                      }}>
                      Prognozlasdirilmis
                    </Text>
                  </Row>
                </Col>
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
