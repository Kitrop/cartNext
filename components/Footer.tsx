import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import {GithubIcon, TelegramIcon} from "./Icons";


const Footer = () => {
  return (
      <footer className={styles.footer}>
        <ul className={styles.footer_info}>
          <li>@nextshop 2022</li>
          <li><Link href={'#'}><TelegramIcon/></Link></li>
          <li><Link href={'#'}><GithubIcon/></Link></li>
        </ul>
      </footer>
  )
}

export default Footer;