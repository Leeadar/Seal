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
            console.log(item)
            return <Col><Recipe Recipe={item}></Recipe></Col>
        })
        
    }
    render = () => {
        return (
            <div>
                <Row>
                {this.showAllRecipes(this.props.Recipes)}   
                </Row>
            </div>
                )
                
            }
}

export default Recipes;