import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Student() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const student = {
        id : id,
        name : name,
        address : address
    }
    let textChange = (event) => {
        if(event.target.name === 'id')
        setId(event.target.value);
        else if (event.target.name === 'name') {
            setName(event.target.value);
        } else if (event.target.name === 'address') {
            setAddress(event.target.value);
        }    
    }

    let addStudent = (event) => {
        event.preventDefault();
        axios.post('http://localhost8080/student',student)
        .than(response => {alert(response.data)})
        .catch(error=>alert(error));
        setId('');
        setName('');
        setAddress('');
    }


  return (
    <div className='my-3'>
    <Card>
    <Card.Header>Add Student information</Card.Header>
    <Form onSubmit={addStudent}>
    <Card.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Id</Form.Label>
        <Form.Control name="id" value={id} type="text" placeholder="Enter Id" onChange={textChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control name="name" value={name}type="text" placeholder="Enter Name" onChange={textChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Address</Form.Label>
        <Form.Control name="address" value={address} type="text" placeholder="Enter Address" onChange={textChange}/>
      </Form.Group>

      
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Footer>
    </Form>
    </Card>
    </div>
  )
}
