import styles from "../styles/Header.module.css";
import {FC, memo} from "react";
import {IOrder} from "../pages";
import {v4 as uuidv4} from 'uuid';

const Cart: FC<IProps> = ({order}) => {
  console.log(order)

  return (
      <div className={styles.shopcart_main}>
        {order.map(i => <div key={uuidv4()}>
          <span> {i.name} </span>
          <span> {i.price} </span>
        </div>)}
      </div>
  )
}

interface IProps {
  order: IOrder[]
}


export default Cart;