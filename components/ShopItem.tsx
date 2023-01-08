import Image, { StaticImageData } from "next/image";
import styles from '../styles/ShopItem.module.css'
import {Dispatch, FC, SetStateAction} from "react";
import {PlusDark, PlusLight} from "./Icons";
import {IOrder} from "../pages";

const ShopItem:FC<IPros> = ({name, price, img, width, height, theme, setOrder, order}) => {


  return (
     <div>
       <div className={styles.shopItem_div}>
         <div>
           <div className={styles.shopItem_name}>{name}</div>
           <Image src={img} alt={'123'} width={width} height={height} className={styles.shopItem_img}/>
         </div>
         <div className={styles.shopItem_div_price}>
           <div className={styles.shopItem_price}>{price}$</div>
           <div onClick={() => setOrder([...order, {name, price, img} ]) } className={styles.shopItem_button}> {theme === 'dark' ? <PlusLight /> : <PlusDark />} </div>
         </div>
       </div>
     </div>
  )
}



interface IPros {
  img: string | StaticImageData
  name: string
  price: number
  height: number
  width: number
  theme: string
  setOrder: Dispatch<SetStateAction<IOrder[]>>
  order: IOrder[]
}

export default ShopItem