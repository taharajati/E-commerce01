import React, {createContext,useState,useEffect} from 'react';


// creat context
export const productContext = createContext();




const ProductProvider = ({children}) => {
// products state
   const [products,setProducts] = useState([]);
// fetch procucts
   useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } ;
   fetchProducts();
   },[])
  
  return <productContext.Provider value={{products}} >{children}</productContext.Provider>
};

export default ProductProvider;
