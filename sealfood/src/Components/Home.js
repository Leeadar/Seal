import '../App.css';
import Foodtype from './FoodType';

function Home() {
  return (
    <div className="Home">
      //Logo
      <h1>Title</h1>
      //input time
      <div className="FoodsTypes">
      <Foodtype type="MEAT"></Foodtype>
      <Foodtype type="DAIRY"></Foodtype>
      <Foodtype type="VEGEN"></Foodtype>
      </div>
      <button>Cook!</button>
    </div>
  );
}

export default Home;
