import * as React from 'react';
import { Text, Container, List, ListItem, Content } from 'native-base';

const routes = [
  {
    route: 'Home',
    caption: 'Home',
  },
  {
    route: 'BlankPage',
    caption: 'Blank Page',
  },
  {
    route: 'Login',
    caption: 'Logout',
  },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const email = this.props.navigation.getParam('email', 'no-email');
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    data.route === 'Login'
                      ? this.props.onLogout()
                      : this.props.navigation.navigate(data.route);
                  }}>
                  <Text>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
