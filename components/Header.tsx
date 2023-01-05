import styles from '../styles/Header.module.css'
import {FC, useState} from "react";
import {IProps} from "../pages";
import {CartIcon, MoonLight, SunLight} from "./Icons";


const Header: FC<IProps> = ({theme, setTheme}) => {

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
        {cartStatus ? <div className={styles.shopcart_main}> open </div> : null}
      </header>
  )
}

export default Header;