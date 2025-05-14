import styles from './home.module.css'

import { useState,useEffect } from "react"


export function Home(){

const [mercadoria,setMercadoria] = useState<Market[]>([])

useEffect(()=>{
getMercadorias()

},[])

interface Market{
  id:string;
  title:string;
  price:string;
  description:string;
  category:string;
  image:string;
  formatedprice?:string
}



async function getMercadorias() {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then((data: Market[]) => {
      const priceFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });

      const formattedResult = data.map((item) => ({
        ...item,
        formatedprice: priceFormatter.format(Number(item.price))
      }));

      console.log(formattedResult);
      setMercadoria(formattedResult);
    });
}


  return(
      <div className={styles.container}>
        <h1>Mercadoria de Varejo</h1>
          <ul className={styles.ull}>
            {mercadoria.map((item)=>(
              <li key={item.id}>
               <strong className={styles.title}>
  {item.title.length > 30 ? item.title.slice(0,25) + "..." : item.title}
</strong>
                <img className={styles.imge}
                 src={item.image} alt="imagem do item" />
                 <p className={styles.preco}>{item.formatedprice}</p>
              </li>
              
            ))}
          </ul>
    </div>
  )
} 
