import Link from 'next/link';
import styled from 'styled-components';
import styles from '../styles/Footer.module.css'
import {GithubIcon, TelegramIcon} from "./Icons";
import {FC} from "react";


const Footer: FC<IProps> = ({theme}) => {

  const FooterComponent = styled.footer`
    width: 100%;
    min-height: 9vh;
    background-color: ${props => (theme === 'dark' ? '#111111' : '#cacaca')};
    color: ${props => (theme === 'dark' ? '#fff' : '#111111')};
    padding: .5em 1em;
    flex-shrink: 0;
    justify-content: space-between;
  `

  return (
     <footer className={styles.footer}>
       <ul className={styles.footer_info}>
         <li className={styles.copyright}>@nextshop 2022-2023</li>
         <li><Link href={'#'}><TelegramIcon/></Link></li>
         <li><Link href={'#'}><GithubIcon/></Link></li>
       </ul>
     </footer>
  )
}

interface IProps {
  theme: string
}

export default Footer;