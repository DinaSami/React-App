import React from 'react';
import Footer from './component/Footer';
import Main from './component/Main';
import Header from './component/Header';
import data from './assets/data.json';
import SelectedBeast from './component/SelectedBeast';
import MyForm from './component/MyForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: data,
      show: false,
      obj: {},
      newData: data
    };
  }
  showElement = (event) => {
    this.setState({
      show: true,
      obj: event
    });
    console.log(event);
  }
  dontShowElem = () => {
    this.setState({
      show: false,
    });
  }
  filteredHorned = (e) => {
    this.setState({ newData: e });
  }


  render() {
    return (
      <div>
        <Header />
        <MyForm newState={this.filteredHorned} dataForm={data} />
        <Main sowModal={this.showElement} newDataMain={this.state.newData} />
        <SelectedBeast show={this.state.show} dontShow={this.dontShowElem} obj={this.state.obj} />
        <Footer />
      </div>
    );
  }
}

export default App;

