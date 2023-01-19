import ProductCard from "../../atoms/productcard";
const ProductGallery = ({products}) => {
    return(
    <div className="flex flex-wrap justify-center max-w">
    {products.map((product, index) => {
      return (
        <>
          <div key={index} className="px-10">
            <ProductCard
              id={product.id}
              imageUrl={product.image}
              description={product.description}
              title={product.title}
              price={product.price}
            />
          </div>
        </>
      );
    })}
  </div>

)}

export default ProductGallery