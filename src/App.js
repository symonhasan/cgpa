import React , {Component} from 'react';
import './App.css';
import Header from './Componants/Header';

class App extends Component {

  state = {
    subjectList : [],
    currentCGPA : ""
  };

  render() {
    return (
      <div className="App">
        <Header cgpa = {this.state.currentCGPA} />
      </div>
    );
  }
}

export default App;