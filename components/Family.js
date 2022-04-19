import React, { useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Family () {
     
    useEffect(() =>{
        AOS.init({ duration: 2000});
      },[]);

   
  return (
    <>
    <div data-aos="fade-up" className="bg-blue-100  mt-19 px-6 py-16 ">
        <div className=" container items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="p-9 lg:max-w-lg">
                    <h1 className="mb-2 text-2xl font-bold text-gray-600 leading-tight md:text-3xl">Build family with others in your stage of life.</h1>
                    <p className="mt-4 p-4 text-lg mb-12 leading-snug text-gray-700">Church is great, but dont let the experience end when the service does. Our ministries meet in small groups outside of weekly services for fun activities, community service and group Bible discussions.</p>
                    <Link href='../familyministry/' passHref className="cursor-pointer">
                     <a className="py-3 px-4 text-sm leading-5 text-gray-700  hover:bg-blue-100  border border-1 border-gray-400 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md uppercase">JOIN THIS MINISTRY</a>
                    </Link>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image className="w-full h-full lg:max-w-2xl" src="/assets/family.jpg" height="400" width="500" alt="family" loading="lazy"/>
            </div>
        </div>
    </div>
    </>
  )
}
