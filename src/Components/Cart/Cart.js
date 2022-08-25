import React,{useContext} from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../Store/Cart-context'
// let total=0;
const Cart =(props)=>{
    const cartcntx=useContext(CartContext)
    const cartItems=(<ul className={classes['cart-items']}>{cartcntx.items.map((item)=>(<CartItem key={item.id} name= {item.food} price= {item.price} Quantity = {item.quantity}/>
    )  )}
    </ul>);
   

  const Total= cartcntx.items.map((item) =>item.price);
   console.log('...', Total)
   
  
    return(
        <Modal onClose={props.onClose}>   
         {cartItems} 
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>

        </div>
        </Modal>

    );
}

export default Cart;