import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="relative bottom-0 w-full p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Demo
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/aviso-de-privacidad" className="mr-4 hover:underline md:mr-6 ">
                {" "}
                Aviso de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                {" "}
                Soporte
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 3{" "}
          <Link href="/" className="hover:underline">
            {" "}
            Demo Store™.
          </Link>
          . Derechos reservados
        </span>
      </footer>
    </>
  );
};

export default Footer;
