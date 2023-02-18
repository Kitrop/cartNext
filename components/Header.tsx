import styles from '../styles/Header.module.css'
import {FC, useState} from "react";
import {CartIconDark, CartIconLight, MoonDark, SunLight} from "./Icons";
import Cart from "./Cart";
import {IOrder} from "../pages";
import styled from 'styled-components';


const Header: FC<IProps> = ({theme, setTheme, order}) => {

  let [cartStatus, setCartStatus] = useState(false)

  const HeaderComponent = styled.header`
    background-color: ${props => (theme === 'dark' ? '#111111' : '#cacaca')};
    color: ${props => (theme === 'dark' ? '#fff' : '#111111')};
  `

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
      <HeaderComponent className={styles.header}>
        <div className={styles.header_i}>
          <h1>NEXT SHOP</h1>
        </div>
        <nav className={styles.header_navigation}>
          <ul className={styles.nav}>
            <li onClick={toggleTheme} >{theme === 'dark' ? <SunLight/> : <MoonDark/>} </li>
            <li onClick={() => setCartStatus(!cartStatus)}> {theme === 'dark' ? <CartIconLight/> : <CartIconDark/>}  </li>
          </ul>
        </nav>
        {cartStatus ? <Cart order={order} theme={theme} setCartStatus={setCartStatus}/>  : null}
      </HeaderComponent>
  )
}

interface IProps {
  theme: string
  setTheme: any
  order: IOrder[]
}

export default Header;