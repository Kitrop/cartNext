import styles from "../styles/Header.module.css";
import {Dispatch, FC, SetStateAction} from "react";
import {IOrder} from "../pages";
import {v4 as uuidv4} from 'uuid';
import styled from "styled-components";
import {CrossBlackIcon, CrossWhiteIcon} from "./Icons";

const Cart: FC<IProps> = ({order, theme, setCartStatus}) => {

  const Modal = styled.div `
    color: ${props => ( theme === 'dark' ? 'white' : 'black')};
    background-color: ${props => (theme === 'dark' ? '#000000FF' : '#fff')};
    position: fixed;
    box-shadow: ${props => (theme === 'dark' ? '0px 0px 26px 8px rgba(255, 255, 255, 0.2);' : '0px 0px 26px 8px rgba(0, 0, 0, 0.2)')};
    width: 98%;
    height: 90vh;
    top: 40px;
    right: 15px;
    border-radius: 3px;
    padding: 20px 30px;
  `

  let macbookCount = 0
  let ipadCount = 0
  let iphoneCount = 0

  order.map(i => {
    if (i.name === 'macbook') {
      macbookCount += 1
    }
    else if (i.name === 'iphone') {
      iphoneCount += 1
    }
    else if (i.name === 'ipad') {
      ipadCount += 1
    }
  })

  let iphoneTotalPrIce = iphoneCount * 1000
  let macbookTotalPrIce = macbookCount * 2000
  let ipadTotalPrIce = ipadCount * 1500

  return (
      <Modal>
        <span className={styles.cross} onClick={() => setCartStatus(false)}> { theme === 'dark' ?  <CrossWhiteIcon/> :  <CrossBlackIcon/>} </span>
        { iphoneCount > 0 ? <div className={styles.infoAboutItem}>
          <span className={styles.infoAboutItem_span}>iphone</span>
          <span className={styles.infoAboutItem_span}> {iphoneCount} </span>
          <span className={styles.infoAboutItem_span}> {iphoneTotalPrIce}$ </span>
        </div> : null }
        { ipadCount > 0 ? <div className={styles.infoAboutItem}>
          <span className={styles.infoAboutItem_span}>ipad</span>
          <span className={styles.infoAboutItem_span}> {ipadCount} </span>
          <span className={styles.infoAboutItem_span}>{macbookTotalPrIce}$ </span>
        </div> : null }
        { ipadCount > 0 ? <div className={styles.infoAboutItem}>
          <span className={styles.infoAboutItem_span}>macbook</span>
          <span className={styles.infoAboutItem_span}> {macbookCount} </span>
          <span className={styles.infoAboutItem_span}> {ipadTotalPrIce}$ </span>
        </div> : null }
        <div>
          <span className={styles.totalPrice}>total amount: {iphoneTotalPrIce + macbookTotalPrIce + ipadTotalPrIce}$</span>
        </div>
      </Modal>
  )
}


interface IProps {
  order: IOrder[]
  theme: string
  setCartStatus: Dispatch<SetStateAction<boolean>>
}


export default Cart;