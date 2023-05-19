import { Component } from 'react';
import styles from './Cars.module.css';

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsData: [
        {
          model: 'Ford',
          year: 1992,
        },
        {
          model: 'Audi',
          year: 2002,
        },
        {
          model: 'Mazda',
          year: 2005,
        },
      ],
    };
  }
  renderCarsList = () => {
    const cars = this.state.carsData;
    return cars.map((car, index) => {
      return (
        <li key={index}>
          <Car {...car} />
        </li>
      );
    });
  };

  render() {
    return <ul className={styles.carsList}>{this.renderCarsList()}</ul>;
  }
}

function Car({ model, year }) {
  return (
    <div className={styles.car}>
      <h2>Car model: {model}</h2>
      <p>Year: {year}</p>
    </div>
  );
}
