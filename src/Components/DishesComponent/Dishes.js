import dataDishes from './Components/data/dataDishes';
import Dish from '.Components/DishesComponent/Dish';


    const Dishes = () => {
        return (<div>
            {dataDishes.map(dish => <Dish dish={dish}/>)}
        </div>)
   
}
export default Dishes;