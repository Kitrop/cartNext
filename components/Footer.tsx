import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
     <footer className={styles.footer}>
        <div className={'ml-4 pt-6 text-left'}>
          <span>@nextshop 2022</span>
          <span className={'ml-10'}>tg</span>
        </div>
     </footer>
  )
}

export default Footer;