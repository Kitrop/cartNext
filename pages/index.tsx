import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'
import ShopItem from "../components/ShopItem";
import macbook from '../public/macbook.png'
import ipad from '../public/ipad.png'
import iphone from '../public/iphone_14.png'
import {FC, useState} from "react";
import {StaticImageData} from "next/image";


const Home: FC<IProps> = ({theme, setTheme}) => {


  // Items that are in stock
  const shopItems: IShopItems[] = [
    {id: 1, name: 'macbook', price: 2000, img: macbook, width: 280, height: 200},
    {id: 2, name: 'ipad', price: 1500, img: ipad, width: 250, height: 200},
    {id: 3, name: 'iphone', price: 1000, img: iphone, width: 250, height: 250},
  ]

  // State order
  const [order, setOrder] = useState<IOrder[]>([])

  return (
      <>
        <Header theme={theme} setTheme={setTheme} order={order}/>
        <main className={styles.main}>
          {/*Items that are in stock*/}
          {shopItems.map(m => <ShopItem key={m.id} img={m.img} name={m.name} price={m.price} height={m.height}
                                        width={m.width} theme={theme} setOrder={setOrder} order={order} />)}
        </main>
        <Footer theme={theme}/>
      </>
  )
}

export default Home;


export interface IProps {
  theme: string
  setTheme: any
}

interface IShopItems {
  id: number,
  name: string
  price: number,
  img: string | StaticImageData,
  width: number,
  height: number
}

export interface IOrder {
  name: string,
  price: number,
  img: string | StaticImageData
}