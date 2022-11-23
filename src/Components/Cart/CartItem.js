import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();

        return (<div>
        <span><p>{dishes.name}</p>
        <img className="cartPic" src={`./${dishes.img}.jpg`} alt="smallDish" width="10px"/></span>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash"/> 
        </span>
    </div>)
}

export default CartItem;