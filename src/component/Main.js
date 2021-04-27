'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Group from './Group';


class Main extends React.Component {
  render() {
    return <CardGroup id='group'>
      <Group />
    </CardGroup>;
  }
}
export default Main;
