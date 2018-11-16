import * as React from 'react';
import Home from '../../screens/Home';
// test data
const data = ['Davamiyyət', 'Əməkhaqqı', 'Xərclər', 'Dövriyyə'];
const datas = [
  {
    title: 'Davamiyyət',
    delayed: {
      title: 'Gecikenlerin sayi',
      count: 14,
      percent: 70,
      difference: '20% yukselib',
    },
    noCome: {
      title: 'Gelmeyenlerin sayi',
      percent: 28,
      faktiki: 5555,
      prognoz: 7777,
    },
    mostDelayed: {
      title: 'En cox geciken',
      name: 'Agahuseyn Balabeyov',
      time: '1s 34d',
      delayed_count: 10,
    },
  },
  {
    title: 'Əməkhaqqı',
  },
  {
    title: 'Xərclər',
  },
  {
    title: 'Dövriyyə',
  },
];

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home navigation={this.props.navigation} list={datas} />;
  }
}

export default HomeContainer;
