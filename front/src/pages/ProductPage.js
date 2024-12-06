import { useLocation } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
    const location = useLocation();
    const { name, img, description } = location.state || {};
    return (
        <main>
            <section class="product">
                <Product name={name} img={img} description={description} direction={"/error"} />
            </section>
        </main>
    )
}

export default ProductPage;