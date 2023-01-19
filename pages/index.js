import Head from "next/head";
import { getProducts } from "../services/products";
import ProductCard from "../components/atoms/productcard";
import Hero from "../components/molecules/hero";
import Image from "next/image";
import Link from "next/link";
import ProductGallery from "../components/molecules/product-gallery";

const Home = (products) => {
  const TITULO="Demo Store"
  const TEXTO="Frase Generica"
  return (
    <>
      <Head>
        <title>Demo Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          size="fullscreen"
          imageUrl="https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          titulo={TITULO}
          texto={TEXTO}
          boton={true}        
        ></Hero>
        <div className="items-center">
          <h1 className="font-thin text-5xl text-center pb-10">
            Productos de Temporada
          </h1>
          <ProductGallery products={products.products} />
          <div className="flex justify-center mt-10">
            <Link href="/store">
              <button class="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white border-2">
                <span class="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                  Ver mas productos
                </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                  class="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center mt-10 justify-center">
          <Image
            width={500}
            height={500}
            alt="Ropa Formal"
            src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          ></Image>
          <div>
            <h1 className="text-5xl font-bold px-5">Conoce tu estilo</h1>
            <p className="py-3 text-xl pl-20">
              disfruta de nuestras nuevas colecciones
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col bg-neutral-200 py-20">
          <h1 className="text-3xl mb-2 font-thin"> Newsletter </h1>
          <p>
            Unete a nuestro Newsletter para enterate antes de nuestros productos
          </p>
          <form>
            <div class="relative z-0 w-full mb-6 group mt-5 w-56">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600  focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electronico
              </label>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getProducts(3);
  console.log(data);
  return {
    props: { products: data },
  };
};

export default Home;
