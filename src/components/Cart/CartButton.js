import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiAction } from '../Store/ui-slice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartQuantity=useSelector((state)=>state.cart.totalQuantity)
  function toggleCartHandler(){
    dispatch(uiAction.toggle());
    console.log(cartQuantity)
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
