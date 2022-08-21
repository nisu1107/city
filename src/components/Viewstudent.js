import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function Viewstudent() {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/students')
        .then(response=>setStudents(response.data))
        .catch(error=>alert(error));
    })
    return (
        <Card className="my-3">
            <Card.Header>Student Listing</Card.Header>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Address</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    { students.map((student)=>
                        <tr>
                            <td>{student.Id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td><Button variant="primary">Edit</Button>{' '}
                            <Button variant="danger">Delete</Button>{' '}
                            </td>
                        </tr>)
                    }    
                    </tbody>
                </Table>
            </div>
            <Card.Footer>This is the information of Student</Card.Footer>
        </Card>
    )
}