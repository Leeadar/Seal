import '../App.css';
import Foodtype from './FoodType';
import Logo from '../Assets/Logo.jpg'
import React from 'react';
class Home extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      currentType: '',
      time: 15
    };
  }

  onChangeTime = (event) => {
     
      this.setState ({
        time: event.target.value
      })
  }

  onClickTypeHandler = (type) => {
    this.setState ({
        currentType: type
      })
  }

  render = () => {
      return (
        <div className="Home">
      
        <h1>.Cook<br></br>Don't Think</h1>
        <div className='cookingTime'>כמה זמן יש לך לבשל?</div>
        <select className='time' name="time" id="time" onChange={this.onChangeTime} value={this.state.time}>
            <option  value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
        </select>
        
        <div className="FoodsTypes">
        <Foodtype onClickTypeHandler={this.onClickTypeHandler} src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/meat.png?alt=media&token=c8a52837-cdcc-456a-ab88-e6fc8c075dbe' type="MEAT"></Foodtype>
        <Foodtype onClickTypeHandler={this.onClickTypeHandler} src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/dairy.PNG?alt=media&token=c6007383-9cec-4f08-8a19-2657ff48ed7d'type="DAIRY"></Foodtype>
        <Foodtype onClickTypeHandler={this.onClickTypeHandler} src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/IMG_0544.PNG?alt=media&token=ddb36517-2b56-4ea4-a82e-58e533c71f70'type="VEGAN"></Foodtype>
        </div>
        <button onClick={()=>this.props.onClickHandler(this.state.currentType,this.state.time)}>Cook!</button>
      </div>
      )
  }
}



export default Home;
