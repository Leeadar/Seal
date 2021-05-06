import '../App.css';
function FoodType({ onClickTypeHandler,type, src}) {
    return (
        <div onClick={() => onClickTypeHandler(type)} className='FoodType'>
            <img  src={src}></img>
            <div   className='Type'>{type}</div>
        </div>
    )
}

export default FoodType;