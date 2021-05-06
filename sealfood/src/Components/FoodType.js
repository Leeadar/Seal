import '../App.css';
function FoodType({ type, src}) {
    return (
        <div className='FoodType'>
            <img  src={src}></img>
            <div className='Type'>{type}</div>
        </div>
    )
}

export default FoodType;