import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



class MyForm extends React.Component {
  hornReset = (event) => {
    event.preventDefault();

    let clickedValue = Number(event.target.value);
    if (clickedValue > 0) {
      let beastArray = this.props.dataForm.filter(element => {
        return (Number(element.horns) === clickedValue);
      });
      this.props.newState(beastArray);
    }
    else { this.props.newState(this.props.dataForm); }
  };

  render() {
    return (
      <Form>
        <Form.Group >
          <Form.Label>Select Horns Number</Form.Label>
          <Form.Control as="select" onChange={this.hornReset}>
            <option value='0'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}


export default MyForm;
