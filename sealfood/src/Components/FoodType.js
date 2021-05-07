import '../App.css';


const dic = {
    MEAT: "בשרי",
    DAIRY: "חלבי",
    VEGAN: "טבעוני"
}
function FoodType({ currentType , onClickTypeHandler,type, src}) {
    return (
        <div className={` FoodType ${currentType === type ? 'choose' : null}`} onClick={() => onClickTypeHandler(type)}>
            <img  src={src}></img>
            <div  className='Type'>{dic[type]}</div>
        </div>
    )
}

export default FoodType;