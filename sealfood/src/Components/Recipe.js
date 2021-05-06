import '../App.css';
import Foodtype from './FoodType';
import {Card} from 'react-bootstrap'


function Recipe(props) {
  return (
    <div>
        <div class="card">
            <div class="header">
                <img src={props.Recipe.imgURL}></img>
            </div>
            <div class="text">
            <h5 class="food">
                {props.Recipe.name}
            </h5>
            <i class="fa fa-clock-o"> {props.Recipe.makingTime} דקות</i>
            <p class="info">{props.Recipe.description}</p>
            </div>
            <a href="#" class="btn">בואו נבשל!</a>
        </div>
    </div>
  );
}

export default Recipe;