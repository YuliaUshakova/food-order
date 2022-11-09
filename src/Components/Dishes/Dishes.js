import dataDishes from './data/dataDishes';
import Dish from './Dish';

    const Dishes = () => {
        return (<div>
            {dataDishes.map(dish => <Dish dish={dish}/>)}
        </div>)
   
}
export default Dishes;