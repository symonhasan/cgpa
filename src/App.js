import React , {Component} from 'react';
import './App.css';
import Header from './Componants/Header';
import Form from './Componants/Form';

class App extends Component {

  state = {
    subjectList : [],
    currentCGPA : ""
  };

  render() {
    return (
      <div className="App">
        <Header cgpa = {this.state.currentCGPA} />
        <div className="AppBody">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;