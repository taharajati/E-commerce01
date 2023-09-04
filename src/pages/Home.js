import React, {useContext} from 'react';
import { productContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
// get product from product context
  const {products} = useContext(productContext);

// get only men's & women's clothing catogory
  const filteredproducts = products.filter(item=>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })

  return <div>
    <Hero/>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredproducts.map((product) =>{
            return <Product product={product} key={product.id}/>
            
          })}
        </div>

      </div>
    </section>
  </div>;
};

export default Home;
