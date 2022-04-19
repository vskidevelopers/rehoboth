import Image from 'next/image'
import Link from  'next/link'

export default function ChurchNav() {
    return (
        <>
    <section   className=" container mx-auto bg-gray-50">
        <nav className="flex justify-between bg-white w-full z-10" >
          <div className="flex justify-between items-center w-full">
            <div className="xl:w-1/3">
            <Link href='/' passHref>
              <a className="block max-w-max">
               <Image className="h-8" src="/assets/logo.png" alt="logo" height='50' width='60'/> 
              </a>
              </Link>
            </div>
            <div className="hidden xl:block xl:w-1/3">
              <ul className="flex justify-center">
              <Link href='#' passHref>
                <li className="mr-12">
                  <a className="text-coolGray-500 cursor-pointer hover:text-coolGray-900 font-medium" >Ministries</a></li>
              </Link>
              <Link href='#' passHref>
              <li className="mr-12">
                  <a className="text-coolGray-500 cursor-pointer hover:text-coolGray-900 font-medium" >Locations</a></li>
              </Link>
              <Link href='#' passHref>
              <li className="mr-12">
                  <a className="text-coolGray-500 cursor-pointer hover:text-coolGray-900 font-medium" >Live</a></li>
              </Link>
              <Link href='#' passHref>
              <li className="mr-12" passHref>
                  <a className="py-2 px-4 text-sm cursor-pointer leading-5 text-gray-700  hover:bg-blue-100  border border-1 border-gray-400 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md" href="#" data-config-id="auto-txt-3-1">LETSTALKNIGHTS</a></li>
              </Link>
              
                
              </ul>
            </div>
            <div className="hidden xl:block xl:w-1/3">
              <div className="flex items-center justify-end">
                <Link href='#' passHref>
                  <a className="inline-block py-2 px-4 mr-2 cursor-pointer leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md" >Contact</a>
                </Link>
                <Link href='#' passHref>
                <a className="py-2 px-4 text-sm leading-5 cursor-pointer text-gray-700  hover:bg-blue-100  border border-1 border-gray-400 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md uppercase" data-config-id="auto-txt-3-1" >Give</a>
                </Link>
              </div>
            </div>
          </div>
          
        </nav>
     
      </section>

      </>

    )
} 