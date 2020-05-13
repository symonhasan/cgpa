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
    resetAll = () => {
        this.setState({
            subjectList: [],
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
                <Header cgpa={this.calculateCGPA()} func={this.resetAll} />
                <div className="AppBody">
                    <div className="">
                        <Form func={this.addCourse} />
                        <div className="info">
                            <p>
                                This site don't store any of your private data
                                or entered data to server. You must have
                                javascript enable in your browser to run this
                                website.
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
