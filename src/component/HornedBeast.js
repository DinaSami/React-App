'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }
    increaseVotes = () => {
        this.setState(
            {
                numOfVotes: this.state.numOfVotes + 1
            }
        );
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseVotes} variant="top" src={this.props.imgUrl} title={this.props.imgUrl} />
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