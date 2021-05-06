import '../App.css';
import Foodtype from './FoodType';
import {Card} from 'react-bootstrap'

function Recipe(props) {
    console.log(props)
  return (
    <div>
        <div class="card">
            <div class="header"></div>
            <div class="text">
            <h5 class="food">
                {props.Recipe.name}
            </h5>
            <i class="fa fa-clock-o"> {props.Recipe.makingTime} Mins</i>
            <p class="info">{props.Recipe.description}</p>
            </div>
            <a href="#" class="btn">Let's Cook!</a>
        </div>
    </div>
  );
}

export default Recipe;