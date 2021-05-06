import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import '../App.css';
import Recipe from './Recipe'

class Recipes extends React.Component {
    render = () => {
        return (
            <div>
<Row>
    <Col><div className='Recipe'><Recipe></Recipe></div></Col>
    <Col><Recipe></Recipe></Col>
    <Col><Recipe></Recipe></Col>
  </Row>
  <Row>
    <Col><Recipe></Recipe></Col>
    <Col><Recipe></Recipe></Col>
    <Col><Recipe></Recipe></Col>
  </Row>
            </div>
            
                )
                
            }
}

export default Recipes;