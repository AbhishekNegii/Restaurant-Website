import React, {useState} from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const[quantity, setQuantity]=useState([])

    const cartItemRemoveHandler=()=>{
        setQuantity(prevCount=>Number(prevCount-1))
    }


    const cartItemAddHandler=()=>{
        setQuantity(prevCount=>Number(prevCount+1))
    }
    

  const price = `$${props.price}`;
//   console.log(price)

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        {props.food}
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.price}>{quantity}</span>
          <span className={classes.amount}>x {props.amount}</span>
           </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartItemRemoveHandler}>−</button>
        <button onClick={cartItemAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
