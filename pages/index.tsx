import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'
import ShopItem from "../components/ShopItem";
import macbook from '../public/macbook.png'
import ipad from '../public/ipad.png'
import  iphone from '../public/iphone_14.png'

export default function Home() {
  return (
     <>
        <Header/>
        <main className={styles.main}>
          <ShopItem name={'macbook'} price={2000} img={macbook} width={280} height={200}/>
          <ShopItem name={'ipad'} price={2000} img={ipad} width={250} height={200}/>
          <ShopItem name={'iphone'} price={2000} img={iphone} width={250} height={250}/>
        </main>
        <Footer/>
     </>
  )
}



