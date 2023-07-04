import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr({filterSearch}) {
 const [ searchValue, setSearchValue ] = useState('') 

 const onSearch = () => {
  filterSearch(searchValue)
  setSearchValue('')
 }
 
 
  return (
    <Row>
       <Navbar  expand="lg" bg='dark' variant='dark'>
      <Container >
        <Navbar.Brand href="#"> 
        <img alt='logo' src='logo1.jpg' className='img' />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
         
          >        
          </Nav>

          <Form className="d-flex ">
            <Form.Control 
              type="text"
              placeholder="ابحث"
              className="mx-3"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button onClick={()=> onSearch()} variant="outline-primary"> ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Navbarr
