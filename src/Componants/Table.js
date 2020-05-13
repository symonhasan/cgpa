import React, { Component } from "react";
import "./Table.css";

export const TableData = (props) => {
    return <td>{props.data}</td>;
};

export class Table extends Component {
    renderTableData() {
        const courseList = this.props.list;
        return courseList.map((course, index) => {
            const { name, credit, gpa } = course;
            return (
                <tr key={index}>
                    <TableData data={index + 1} />
                    <TableData data={name} />
                    <TableData data={credit} />
                    <TableData data={gpa} />
                </tr>
            );
        });
    }
    render() {
        return (
            <table className="course-list">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Course Name</th>
                        <th>Credit Hour</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>{this.renderTableData()}</tbody>
            </table>
        );
    }
}
