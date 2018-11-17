import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Fab,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base';

// styles
import styles from './style';
import TabContent from '../../components/DavamiyyetTabContent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        {/* Header */}
        <Header style={[styles.bgGreen]} hasTabs>
          <StatusBar backgroundColor="#54ab80" barStyle="dark-content" />
          <Left>
            <Button transparent>
              <Icon
                active
                name="md-menu"
                style={{ color: '#fff' }}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#fff' }}>Statistika</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-search" style={{ color: '#fff' }} />
            </Button>
          </Right>
        </Header>
        {/* Header */}
        {/* nav tabs */}
        <Tabs locked={true} renderTabBar={() => <ScrollableTab />}>
          <Tab
            tabStyle={styles.bgGreen}
            activeTabStyle={styles.bgGreen}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            heading={'Davamiyyət'}
            key={'Davamiyyət'}>
            <TabContent data={this.props.list} />
          </Tab>
          <Tab
            tabStyle={styles.bgGreen}
            activeTabStyle={styles.bgGreen}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            heading={'Əməkhaqqı'}
            key={'Əməkhaqqı'}>
            <Text>Əməkhaqqı</Text>
          </Tab>
          <Tab
            tabStyle={styles.bgGreen}
            activeTabStyle={styles.bgGreen}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            heading={'Xərclər'}
            key={'Xərclər'}>
            <Text>Xərclər</Text>
          </Tab>
          <Tab
            tabStyle={styles.bgGreen}
            activeTabStyle={styles.bgGreen}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            heading={'Dövriyyə'}
            key={'Dövriyyə'}>
            <Text>Dövriyyə</Text>
          </Tab>
        </Tabs>
        {/* nav tabs */}
        {/* Fab button */}
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#76ba95' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="md-share" />
          <Button
            style={{ backgroundColor: '#34A34F' }}
            onPress={() => {
              alert('Shared with WhatsApp');
            }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button
            style={{ backgroundColor: '#3B5998' }}
            onPress={() => {
              alert('Shared with Facebook');
            }}>
            <Icon name="logo-facebook" />
          </Button>
        </Fab>
      </Container>
    );
  }
}

export default Home;
