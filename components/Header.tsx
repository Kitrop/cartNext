import styles from '../styles/Header.module.css'
import {FC, useState} from "react";
import {CartIcon, MoonLight, SunLight} from "./Icons";
import Cart from "./Cart";
import {IOrder} from "../pages";


const Header: FC<IProps> = ({theme, setTheme, order}) => {

  let [cartStatus, setCartStatus] = useState(false)

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
      <header className={styles.header}>
        <div className={styles.header_i}>
          <h1>NEXT SHOP</h1>
        </div>
        <nav className={styles.header_navigation}>
          <ul className={styles.nav}>
            <li onClick={toggleTheme} >{theme === 'dark' ? <SunLight/> : <MoonLight/>} </li>
            <li onClick={() => setCartStatus(!cartStatus)}> <CartIcon/> </li>
          </ul>
        </nav>
        {cartStatus ? <Cart order={order} theme={theme}/>  : null}
      </header>
  )
}

interface IProps {
  theme: string
  setTheme: any
  order: IOrder[]
}

export default Header;