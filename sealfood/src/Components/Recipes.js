import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import '../App.css';
import Recipe from './Recipe'
import RecipeModal from './RecipeModal';
import { AnimatePresence , motion} from "framer-motion";
import Modal from './RecipeModal';

class Recipes extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            recipeModal: this.props.Recipes[0],
            showModal: true
        }
     }

    showAllRecipes = (Recipes) => {
        return Recipes.map(item => {
            return <Col className='col'><Recipe Recipe={item}></Recipe></Col>
        })
        
    }

    closeOrderModalHandler = () => {
        this.setState({
            recipeModal: this.props.Recipes[0]
        })
    }
    render = () => {
        console.log(this.props.Recipes[0]);
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