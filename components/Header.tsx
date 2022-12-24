import styles from '../styles/Header.module.css'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";


const Header = () => {

  return (
       <header className={styles.header}>
         <div className={'pt-6 ml-4 text-left'}>SHOP NEXT</div>
         <div className={'text-right'}>
           <span className={'mr-5'}>theme</span>
         </div>
       </header>
  )
}

export default Header;