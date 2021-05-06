import '../App.css';

function FoodType(props) {
    return (
        <div className="FoodType">
            <div className='Type'>{props.type}</div>
        </div>
    )
}

export default FoodType;