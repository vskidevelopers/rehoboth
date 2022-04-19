import React,{ useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Discovery () {

    useEffect(() =>{
        AOS.init({ duration: 2000});
      },[]);
    
    return (
        <div data-aos="fade-up" className="mt-12 mb-12 2xl:mx-auto 2xl:container">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <h1 className="lmb-2 text-2xl text-center font-bold text-gray-600 leading-tight md:text-3xl">Discover friends, family, and purpose</h1>
                <p className="text-gray-600 text-2xl text-center mt-3 font-semi-bold">Check out the different ways to get involved at International Assemblies of God.</p>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
                    
                    <Link href='../ministries/' passHref>
                    <div className="relative flex flex-col cursor-pointer ">
                            
                            <Image src="/assets/fam.jpg" alt="opacity bg" className="absolute w-full top-0" height="600" width="600" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Find the group thats right for you</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Build strong relationships with people who are at a similar life point.</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                        </Link>

                        <Link href='familyministry' passHref>
                        <div className="relative flex flex-col cursor-pointer">
                            
                            <Image src="/assets/ministry.jpg" alt="opacity bg" className="absolute w-full top-0" height="600" width="600" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">going through the journey together.</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Families ministry</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                        </Link>

                        <Link href='../collegestudentsministry/'passHref>
                        <div className="relative flex flex-col cursor-pointer">
                           
                            <Image src="/assets/group.jpg" alt="church music" className="absolute w-full top-0" height="600" width="600" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">God gives every high schooler a purpose</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Teen (The Y) ministry</h1>
                                
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

