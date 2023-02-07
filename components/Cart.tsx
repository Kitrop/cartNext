import styles from "../styles/Header.module.css";
import {Dispatch, FC, SetStateAction} from "react";
import {IOrder} from "../pages";
import {v4 as uuidv4} from 'uuid';
import styled from "styled-components";
import {CrossBlackIcon, CrossWhiteIcon} from "./Icons";

const Cart: FC<IProps> = ({order, theme, setCartStatus}) => {

  const Modal = styled.div `
    color: ${props => ( theme === 'dark' ? 'black' : 'white')};
    background-color: ${props => (theme === 'dark' ? '#fff' : '#000000FF')};
    position: fixed;
    box-shadow: ${props => (theme === 'dark' ? '0px 0px 26px 8px rgba(255, 255, 255, 0.2);' : '0px 0px 26px 8px rgba(0, 0, 0, 0.2)')};
    width: 98%;
    height: 90vh;
    top: 40px;
    right: 15px;
    border-radius: 3px;
    padding: 20px 30px;
  `


  return (
      <Modal>
        <span className={styles.cross} onClick={() => setCartStatus(false)}> { theme === 'dark' ?  <CrossBlackIcon/> :  <CrossWhiteIcon/>} </span>
        {order.map(i => <div key={uuidv4()}>
          <span> { i.name } </span>
          <span> { i.price } </span>
        </div>)}
      </Modal>
  )
}


interface IProps {
  order: IOrder[]
  theme: string
  setCartStatus: Dispatch<SetStateAction<boolean>>
}


export default Cart;