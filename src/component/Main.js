

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementData: this.props.data
    };
  }

  render() {
    let arraElment = this.state.elementData.map(element => {
      return (
        <HornedBeast
          imgUrl={element.image_url}
          name={element.title}
          description={element.description}
          sowModal={this.props.sowModal}
        />
      );
    });
    return (<CardGroup id='group'>{arraElment}</CardGroup>);

  }
}
export default Main;
