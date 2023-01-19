import Hero from "../../components/molecules/hero";
import { getProducts } from "../../services/products";
import ProductGallery from "../../components/molecules/product-gallery";

const Store = (products) => {
    const TITULO="Demo Store"
    const TEXTO="Frase Generica"
    return(
    <>
        <Hero
          size="medium"
          imageUrl="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          titulo="Demo E-Store"
          texto="Calidad/Precio"
          boton={false}
        ></Hero>
        <ProductGallery
        products={products.products}/>
    </>
    )
}

export const getStaticProps = async () => {
    const data = await getProducts();
    return {
      props: { products: data },
    };
  };
  

export default Store;