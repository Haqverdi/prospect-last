import * as React from 'react';
import Home from '../../screens/Home';

// test data
const data = {
  title: 'Davamiyyət',
  delayed: {
    title: 'Gecikenlerin sayi',
    count: 14,
    percent: 70,
    difference: '20% yukselib',
  },
  noCome: {
    title: 'Gəlməyənlərin sayı',
    percent: 28,
    faktiki: 5555,
    prognoz: 7777,
    chartData: [
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
    ],
  },
  mostDelayed: {
    title: 'Ən çox gecikən',
    name: 'Agahuseyn Balabeyov',
    time: '1s. 34 dəq.',
    delayed_count: 10,
  },
};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home navigation={this.props.navigation} list={data} />;
  }
}

export default HomeContainer;
