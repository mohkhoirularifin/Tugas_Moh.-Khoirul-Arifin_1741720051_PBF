import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Table } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Pertemuan Pertama</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#disabled">Disabled</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Moh. Khoirul</td>
              <td>Arifin</td>
              <td>Perekaman Video</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ahmad Musyaddad</td>
              <td>Aminullah</td>
              <td>Editing Video</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lucas</td>
              <td>Yiren</td>
              <td>Tata Busana</td>
            </tr>
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default App;
