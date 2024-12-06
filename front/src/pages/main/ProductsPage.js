import Product from "../../components/Product";
import axios from 'axios';
import { useEffect, useState } from "react";
import ProductItem from "../../components/products/ProductItem";

const ProductsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
      setLoading(false);
    }
    loadProducts();
  }, []);
  return (
    <main>
      <section className="products">
        <div class="productsContainer">
          <h2>Productos:</h2>
          {
            loading ? (
              <p>Cargando.....</p>
            ) : (
              products.map(item => <ProductItem key={item.id} name={item.name}
                description={item.description} img={item.imagen} price={item.price} />)
            )
          }
        </div>
      </section>
    </main>
  )
}
// return (
//     <main>
//         <section class="products">
//             <h2>Productos</h2>
//             <div class="productsContainer">
//                 {products.map((product, index) => (
//                     <Product key={index} name={product.name} img={product.img} description={product.description} direction={product.direction}/>
//                 ))}
//             </div>
//         </section>
//     </main>
// )


export default ProductsPage;