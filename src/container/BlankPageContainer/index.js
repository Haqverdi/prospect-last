import * as React from 'react';
import BlankPage from '../../screens/Blankpage';

export default class BlankPageContainer extends React.Component {
  render() {
    return <BlankPage navigation={this.props.navigation} />;
  }
}
