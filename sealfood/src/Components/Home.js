import '../App.css';
import Foodtype from './FoodType';
import Logo from '../Assets/Logo.jpg'

function Home(props) {
  return (
    <div className="Home">
      
      <h1>Cook! Don't Think!</h1>
      <input type='time'></input>
      <div className="FoodsTypes">
      <Foodtype src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/meat.png?alt=media&token=c8a52837-cdcc-456a-ab88-e6fc8c075dbe' type="MEAT"></Foodtype>
      <Foodtype src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/dairy.PNG?alt=media&token=c6007383-9cec-4f08-8a19-2657ff48ed7d'type="DAIRY"></Foodtype>
      <Foodtype src='https://firebasestorage.googleapis.com/v0/b/seal-67f34.appspot.com/o/Vegan.PNG?alt=media&token=0c50b912-aff3-4048-8b8e-f84f46d44e09'type="VEGEN"></Foodtype>
      </div>
      <button onClick={()=>props.onClickHandler()}>Cook!</button>
    </div>
  );
}

export default Home;
