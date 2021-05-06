import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import '../App.css';
import Recipe from './Recipe'

class Recipes extends React.Component {

    constructor(props) {
        super(props);
     }

    showAllRecipes = (Recipes) => {
        return Recipes.map(item => {
            return <Col className='col'><Recipe Recipe={item}></Recipe></Col>
        })
        
    }
    render = () => {
        return (
            <div className='Recipes'>
                <Row className='Row'>
                {this.showAllRecipes(this.props.Recipes)}   
                </Row>
            </div>
                )
                
            }
}

export default Recipes;