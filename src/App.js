import React from 'react';
import Footer from './component/Footer';
import Main from './component/Main';
import Header from './component/Header';
import data from './assets/data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: data,
      show:false,
      obj:{}
    };
  }
  showElement= (event)=>{
    this.setState({
      show:true,
      obj:event
    });
    console.log(event);
  }
  dontShowElem= ()=>{
    this.setState({
      show:false,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.element} sowModal={this.showElement}/>
        <SelectedBeast show={this.state.show} dontShow={this.dontShowElem} obj={this.state.obj}/>
        <Footer />
      </div>
    );
  }
}

export default App;

