import React, { Component } from "react";
import "./App.css";
import Header from "./Componants/Header";
import Form from "./Componants/Form";
import { Table } from "./Componants/Table";

class App extends Component {
    state = {
        subjectList: [],
        alertMsg: "One or more fields are empty",
        showError: false
    };

    renderError = () => {
      this.setState({
        showError: true
      });
    }
    resetShowMsg = () => {
      this.setState({
        showError: false
      });
    }

    addCourse = () => {
        let name = document.getElementById("course-title").value;
        let credit = parseFloat(document.getElementById("credit-hour").value);
        let gpa = parseFloat(document.getElementById("gpa").value);
        if( name !== "" && !isNaN( credit ) && !isNaN( gpa ) ){
          this.setState({
              subjectList: [
                  ...this.state.subjectList,
                  {
                      name: name,
                      credit: credit,
                      gpa: gpa,
                  },
              ],
              showError: false
          });
        }
        else{
          this.renderError();
        }
    };
    resetAll = () => {
        this.setState({
            subjectList: [],
            showError: false
        });
    };

    calculateCGPA() {
        let courseList = this.state.subjectList;
        let totalCredit = 0;
        for (let i = 0; i < courseList.length; i++)
            totalCredit += courseList[i].credit;
        let gpaSum = 0;
        for (let i = 0; i < courseList.length; i++)
            gpaSum += courseList[i].credit * courseList[i].gpa;
        if (totalCredit === 0) return "";
        return gpaSum / totalCredit;
    }

    TableShow() {
        if (this.state.subjectList.length !== 0) {
            return <Table list={this.state.subjectList} />;
        }
    }

    render() {
        return (
            <div className="App">
                <Header cgpa={this.calculateCGPA()} func={this.resetAll} link="https://github.com/symonhasan/cgpa" />
                  <div className="error">
                      {
                        this.state.showError ? <p onClick={this.resetShowMsg}>{this.state.alertMsg}</p> : null
                      }
                  </div>
                <div className="AppBody">
                    <div className="course-add">
                        <Form func={this.addCourse} />
                        <div className="info">
                            <p>
                                This project is under <strong>MIT License</strong> and completely runs into your browser therefore no information won't send to any sever.
                            </p>
                        </div>
                    </div>
                    {this.TableShow()}
                </div>
            </div>
        );
    }
}

export default App;
