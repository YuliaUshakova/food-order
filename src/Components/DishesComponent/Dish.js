import data from './Components/data/dataDishes';

const Dish = ({dish}) => {
    return (<div>
        <img src={`./${dish.img}.jpg`} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>{dish.price}</p>
        {/*To fix later*/}
        <button>How many dishes?</button>
        <button>ADD TO CART</button>
        </div>
    )
}

export default Dish;