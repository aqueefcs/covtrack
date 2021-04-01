import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import StatePicker from './components/StatePicker/StatePicker';

import { Cards, Chart, StatePicker } from './components';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country:'',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

handleCountryChange = async (country) =>{
  const fetchedData = await fetchData(country);

  this.setState({ data: fetchedData, country: country });
}

  render() {
    const { data, country } = this.state;

    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data}/>
        <StatePicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    )
  }
}

export default App;
