'use strict';

import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './data.json';


class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData
    };
  }

  render() {
    return this.state.data.map(animal => {
      return (

        <HornedBeast
          imgUrl={animal.image_url}
          name={animal.name}
          description={animal.description}
        />

      );
    }
    );
  }
}
export default Group;
