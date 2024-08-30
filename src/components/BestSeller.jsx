import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
   const {products} = useContext(ShopContext);
   const [bestSeller,setBestSeller] = useState([]);
   useEffect(()=>{
      const bestProduct = products.filter((item)=>(item.bestseller))
      setBestSeller(bestProduct.slice(0,5))
   },[products])

  return (
   <>
      <div className="my-10">
         <div className="text-center text-3xl py-8">
            <Title text1={'Best'} text2={'Seller'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Our best seller is a versatile, stylish piece that combines comfort with modern design, making it a must-have in any wardrobe. Loved for its perfect fit and premium quality, its a go-to choice for fashion enthusiasts.
            </p>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
               bestSeller.map((item,index) =>(
                  <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
               ))
            }
         </div>
      </div>
   </>
  )
}

export default BestSeller