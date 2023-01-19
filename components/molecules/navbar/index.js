import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Navbar = () => {
  const [hideNav,setHideNav] = useState(false); 
  const [color,setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [secondNav,setSecondNav] = useState(false);
  const handleNav = () => {
    setHideNav(!hideNav);
  }
  const rutaActual = useRouter().asPath;
  useEffect(() => {
    const changeColor = () =>{
      if(window.scrollY >= 90){
        setColor('#000000');
        setTextColor('#ffffff')
      }else{
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor); 
  },[]) 

  return (
    <>
      <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1920px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Demo</h1>
          </Link>
          <ul style={{color: `${textColor}`}} className="hidden sm:flex">
            <li className="p-4">
              <Link href="/">Inicio</Link>
            </li>
            <li className="p-4">
              <Link href="/store">Tienda</Link>
            </li>
            <li className="p-4">
              <Link href="">Aviso de Privacidad</Link>
            </li>
            <li className="p-4">
              <Link href="">Soporte</Link>
            </li>
            <li>
              <Link href='/login'> <button className="mt-2 px-8 py-2 border">Login</button></Link>
            </li>
          </ul>
          {/*Mobile*/}
          <div onClick={handleNav} className="block sm:hidden text-white z-10" >
            {hideNav ? <><AiOutlineClose size={20} style={{color: `${textColor}`}}/></> : <><GiHamburgerMenu size={20} style={{color: `${textColor}`}}/></>}
          </div>
            <div className={ hideNav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
              <ul style={{color: `${textColor}`}}>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="/tienda">Tienda</Link>
                </li>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="">Aviso de Privacidad</Link>
                </li>
                <li className="p-4 text-4xl hover:text-gray-500">
                  <Link href="">Soporte</Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
