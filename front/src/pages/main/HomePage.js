import { NavLink } from "react-router-dom";
import Product from "../../components/Product";
const products = [
  {
    name: "Media de red",
    img: "/img/product1.png",
    description: "Panty doll importadas, talle universal, abarca de s a xxl, no forma pelotitas, color unico blanco, hechas de naylon",
    direction: "/product",
  },
  {
    name: "Mochila pochita",
    img: "/img/product2.png",
    description: "Mochila peluche con forma de pochita del anime chainsaw man",
    direction: "/product",
  },
  {
    name: "Buzo evangelion",
    img: "/img/product3.png",
    description: "Buzo negro con estampado del Eva-01 del anime evangilon",
    direction: "/product",
  },
];
const HomePage = (props) => {
  return (
    <main>
      <div className="grid-container-main">
        <section className="offers">
          <h2>Ofertas</h2>
          <section>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <NavLink to="/product" state={{ name: products[0].name, img: products[0].img, description: products[0].description }}><img src={products[0].img} class="d-block w-100" alt="..." /></NavLink>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{products[0].name}</h5>
                    <p>{products[0].description}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <NavLink to="/product" state={{ name: products[1].name, img: products[1].img, description: products[1].description }}><img src={products[1].img} class="d-block w-100" alt="..." /></NavLink>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{products[1].name}</h5>
                    <p>{products[1].description}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <NavLink to="/product" state={{ name: products[2].name, img: products[2].img, description: products[2].description }}><img src={products[2].img} class="d-block w-100" alt="..." /></NavLink>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{products[2].name}</h5>
                    <p>{products[2].description}</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </section>
        <section class="info">
          <h2>Informacion sobre nosotros</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit risus bibendum, eget dis vulputate massa nullam fringilla nam arcu lectus cursus, velit litora fusce taciti porta imperdiet ad platea. Egestas suscipit aliquam mi vehicula malesuada sociis posuere et feugiat, nibh lobortis diam semper netus sagittis lacinia magnis vulputate enim, nunc ultrices etiam proin hac nec sodales cursus. Tristique lacinia accumsan duis per nisi hac dapibus arcu pellentesque, rhoncus fames mi tortor vitae risus viverra torquent mollis, ullamcorper mattis cras felis congue aliquet aliquam morbi. Sociis fusce aenean egestas nam proin bibendum lacinia, nisi ridiculus molestie quis sed malesuada erat vitae, nullam et ornare feugiat pharetra accumsan. Taciti lacinia ullamcorper habitasse risus ultrices nisi est arcu, nisl phasellus ultricies senectus facilisi dapibus odio feugiat etiam, accumsan eget penatibus turpis porta diam pretium. Montes gravida rutrum porta lectus rhoncus ad faucibus, tristique torquent lobortis sollicitudin conubia ut.</p>
        </section>
        <section class="products">
          <h2>Algunos de nuestros productos</h2>
          <div class="productsContainer">
            {products.map((product, index) => (
              <Product key={index} name={product.name} img={product.img} description={product.description} direction={product.direction} />
            ))}
          </div>
          <NavLink to="/products" className={`button`}>Ver mas productos...</NavLink>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
