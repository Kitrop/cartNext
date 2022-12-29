import styles from '../styles/Header.module.css'
import {Dispatch, FC, SetStateAction} from "react";
import {IProps} from "../pages";



const Header: FC<IProps> = ({theme, setTheme}) => {

    const toggleTheme = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <span>NEXT SHOP</span>
                        </li>
                        <li className="nav-item">
                            <button className={styles.switchbutton} onClick={toggleTheme}>Switch Theme</button>
                        </li>
                        <li className="nav-item">
                            CART
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;