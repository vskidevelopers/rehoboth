import React, { useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Blog() {

  useEffect(() =>{
    AOS.init({ duration: 2000});
  },[]);

  return (
    <>
    <section className="relative py-20 2xl:py-40 bg-blue-100 overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="mb-14 text-center">
      <span className="text-lg text-gray-400 font-bold">What&apos;s new at Open Doors Rehoboth Church</span>
      <h2 className="mt-8 text-5xl font-bold font-heading text-gray-700">Latest News Posts</h2>
    </div>
    <div className="flex flex-wrap -m-6">
      <div data-aos="fade-up" className="relative w-full lg:w-1/3 p-6">
       
        <div className="relative z-10 bg-gray-700 rounded-lg">
          <div className="relative mb-8 h-52">
            <Image className="w-full h-full rounded-lg object-cover object-top" src="/assets/bible.jpg" height="300" width="500" alt=""/>
            <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
              <p className="text-xl font-bold">30</p>
              <p className="text-xs uppercase text-gray-300">Feb</p>
            </div>
          </div>
          <div className="px-14 pb-10"><a className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400" href="#">Teaching the faithful how to protect the Church</a></div>
        </div>
      </div>
      <div data-aos="fade-down" className="relative w-full lg:w-1/3 p-6">
        
        <div className="relative z-10 lg:mt-24 bg-gray-700 rounded-lg">
          <div className="relative mb-8 h-52">
          <Image className="w-full h-full rounded-lg object-cover object-top" src="/assets/crucifix.jpg" height="300" width="500" alt=""/>
            <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
              <p className="text-xl font-bold">29</p>
              <p className="text-xs uppercase text-gray-300">Feb</p>
            </div>
          </div>
          <div className="px-14 pb-10"><a className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400" href="#">10 ways to walk even stronger in Christ after tough times</a></div>
        </div>
      </div>
      <div data-aos="fade-up" className="relative w-full lg:w-1/3 p-6">
        
        <div className="relative z-10 bg-gray-700 rounded-lg">
          <div className="relative mb-8 h-52">
          <Image className="w-full h-full rounded-lg object-cover object-top" src="/assets/cross.jpg" height="300" width="500" alt=""/>
            <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
              <p className="text-xl font-bold">25</p>
              <p className="text-xs uppercase text-gray-300">Feb</p>
            </div>
          </div>
          <div className="px-14 pb-10"><a className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400" href="#">How to Pray for the sick (+Testimony)</a></div>
        </div>
        
      </div>
    </div>
    <div className="mt-14 lg:mt-24 text-center"><a className="inline-block py-5 px-10 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200 uppercase" href="#">See all</a></div>
  </div>
</section>

    </>
  )
}


