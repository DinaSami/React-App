import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0
    };
  }
  increaseVotes = () => {
    this.setState(
      {
        numOfVotes: this.state.numOfVotes + 1
      }
    );
  }

  showModal = () => {
    this.props.sowModal({
      name: this.props.name,
      description: this.props.description,
      imgUrl: this.props.imgUrl
    });
  }

  render() {
    return (

      <div>
        <Card style={{ width: '18rem' }} class='card' onClick={this.showModal}>
          <Card.Img onClick={this.increaseVotes} variant="top" src={this.props.imgUrl}/>
          <Card.Body>
            <Card.Text>
              {this.props.name}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>❤️ {this.state.numOfVotes}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeast;
