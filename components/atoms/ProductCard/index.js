import Image from "next/image";
import Link from "next/link";
import Hero from "../../molecules/hero";

const ProductCard = ({ id, imageUrl, title, price }) => {
  return (
    <>
      <div className="w-72 h-fit group my-10">
        <div className="relative overflow-hidden">
          <img className="h-96 w-full object-fill" src={imageUrl} alt="" />
          <div className="absolute h-full w-full  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link href={`/store/${id}`}>
              <button className="bg-black text-white py-2 px-5">
                Ver Producto
              </button>
            </Link>
          </div>
        </div>
        <h2 className="mt-3 text-xl capitalize">{title}</h2>
        <p className="text-xl mt-2 ml-1 inline-block">${Math.trunc(price)}</p>
      </div>
    </>
  );
};

export default ProductCard;
