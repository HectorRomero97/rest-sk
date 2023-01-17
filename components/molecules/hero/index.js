import Image from "next/image";
import Link from "next/link";

const Hero = ({ size, imageUrl }) => {
     const possibleSizesImage = Object.freeze({
        fullscreen: 'flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img',
        big: 'flex items-center justify-center h-[60vh] mb-12 bg-fixed bg-center bg-cover custom-img',
        medium: 'flex items-center justify-center h-[45vh] mb-12 bg-fixed bg-center bg-cover custom-img',
        small: 'flex items-center justify-center h-[35vh] mb-12 bg-fixed bg-center bg-cover custom-img',
        mini: 'flex items-center justify-center h-[19vh] mb-12 bg-fixed bg-center bg-cover custom-img',
      });
      const possibleSizesOpac = Object.freeze({
        fullscreen: 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-screen',
        big: 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-[60vh]',
        medium: 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-[45vh]',
        small: 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-[35vh]',
        mini: 'absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-[19vh]',
      });
    const setImageSize = (size) => {
        if(possibleSizesImage.hasOwnProperty(size)){
            return possibleSizesImage[size];
        }else{
            return possibleSizesImage.fullscreen;
        }
    }
    const setOpacSize = (size) => {
        if(possibleSizesOpac.hasOwnProperty(size)){
            return possibleSizesOpac[size];
        }else{
            return possibleSizesOpac.fullscreen;
        }
    }
  return (
    <>
      <div>
        <div className={setImageSize(size)}>
          <style jsx>{`
            .custom-img {
              background-image: url("${imageUrl}");
            }
          `}</style>
          <div className={setOpacSize(size)} />
          <div className="p-5 text-white z-[2] mt-[-10rem]">
            <h2 className="text-5xl font-bold">Demo Tienda</h2>
            <p className="py-5 text-xl">saludos al Ever</p>
            <Link href="/store"><button>Comprar</button></Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
