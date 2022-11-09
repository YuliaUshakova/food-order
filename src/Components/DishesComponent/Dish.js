import data from './Components/data/dataDishes';

const Dish = ({dish}) => {
    return (<div>
        <img src={`./${dish.img}.jpg`} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>{dish.price}</p>
        </div>
    )
}

export default Dish;