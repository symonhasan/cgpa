import React, { Component } from "react";
import "./App.css";
import Header from "./Componants/Header";
import Form from "./Componants/Form";
import { Table } from "./Componants/Table";

class App extends Component {
    state = {
        subjectList: [],
    };

    addCourse = () => {
        let name = document.getElementById("course-title").value;
        let credit = parseFloat(document.getElementById("credit-hour").value);
        let gpa = parseFloat(document.getElementById("gpa").value);
        this.setState({
            subjectList: [
                ...this.state.subjectList,
                {
                    name: name,
                    credit: credit,
                    gpa: gpa,
                },
            ],
        });
    };

    calculateCGPA() {
        let courseList = this.state.subjectList;
        let totalCredit = 0;
        for (let i = 0; i < courseList.length; i++)
            totalCredit += courseList[i].credit;
        // console.log( totalCredit );
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
                <Header cgpa={this.calculateCGPA()} />
                <div className="AppBody">
                    <Form func={this.addCourse} />
                    {this.TableShow()}
                </div>
            </div>
        );
    }
}

export default App;
