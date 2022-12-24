import Image, { StaticImageData } from "next/image";
import styles from '../styles/ShopItem.module.css'
import {FC} from "react";

const ShopItem:FC<IPros> = ({name, price, img, width, height}) => {
  return (
     <div>
       <div className={styles.shopItem_div}>
         <div>
           <div className={styles.shopItem_name}>{name}</div>
           <Image src={img} alt={'123'} width={width} height={height} className={styles.shopItem_img}/>
         </div>
         <div className={styles.shopItem_div_price}>
           <div className={styles.shopItem_price}>{price}$</div>
           <button className={styles.shopItem_button}>Add</button>
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
}

export default ShopItem