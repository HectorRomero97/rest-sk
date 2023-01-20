import { useRouter } from "next/router";
import { getProductById, getProducts } from "../../services/products";
import ProductCard from "../../components/atoms/productcard";
import { BsFillCartPlusFill } from "react-icons/bs";
import Hero from "../../components/molecules/hero";
import BreadCrumbs from "../../components/atoms/breadcrumbs";
import ReactStars from "react-stars";

const ProductDetail = (product) => {
  const productUse = product.product;
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <Hero
        size="mini"
        imageUrl="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        titulo=""
        texto=""
        boton={false}
      ></Hero>
      <div className="flex justify-center flex-wrap ">
        <div className="flex justify-center flex-col">
          <BreadCrumbs productName={productUse.title} />
          <img src={productUse.image} className="max-w-[100%] max-h-[100%] sm:max-w-[90%] max-h-[90%]" 
          />
        </div>
        <div className="flex flex-col justify-center max-w-[20rem]">
          <h1 className="text-2xl text-bold">{productUse.title}</h1>
          <p className="font-thin">{productUse.category}</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={productUse.rating.rate}
          />
          <hr></hr>
          <h1 className="text-xl">Descripcion</h1>
          <p className="text-base">{productUse.description}</p>
          <button className="bg-black text-white py-2 my-5 px-5 flex text-center justify-center space-x-2">
            <BsFillCartPlusFill size={20}></BsFillCartPlusFill>
            <span>Agregar al Carrito</span>
          </button>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getProducts();
  const paths = posts.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const data = await getProductById(params.id);
  console.log(data);
  return {
    props: { product: data },
  };
};

export default ProductDetail;
