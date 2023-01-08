import styles from "../styles/Header.module.css";
import {FC} from "react";
import {IOrder} from "../pages";
import {v4 as uuidv4} from 'uuid';
import styled from "styled-components";

const Cart: FC<IProps> = ({order, theme}) => {

  const Modal = styled.div `
    color: ${theme === 'dark' ? 'white' : 'black'};
    background-color: ${theme === 'dark' ? '#fff' : '000000FF'};
    position: fixed;
    width: 98%;
    height: 90vh;
    top: 40px;
  `

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
  theme: string
}


export default Cart;