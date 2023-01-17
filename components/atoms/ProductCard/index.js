import Image from "next/image";

const ProductCard = ({key, imageUrl, description,title}) => {
  return (
    <>
      <div className="max-w-xs h-96 rounded overflow-hidden shadow-lg w-30 h-30">
        <Image className="w-30 max-h-60" src={imageUrl} alt="Sunset in the mountains" width={300} height={300}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
