import Link from  "next/link"


export default function ChurchHeader(){
    
    return(
        <>
        
        <div  className="flex flex-col items-center bg-cover bg-center justify-center min-h-screen "
            style={{'background-image':'linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 50%)), url(/assets/church.jpg)',}}>
    
                <div className="text-center">
                    <h1 className=" text-white mb-6 text-4xl font-bold uppercase md:text-5xl font-Poppins">Discover <span className="text-red-600">God&apos;s</span> Ways.</h1>
                    
                    <h3 className="text-2xl text-white font-Poppins">International Assemblies of God. Walk with Us and use the ministry to build people</h3>
                    <Link href='../ministries/' passHref className='cursor-pointer'>
                        <button className="mt-6 px-6 py-3  bg-white text-gray-700 font-semi-bold text-sm uppercase font-medium rounded-lg hover:bg-blue-100 focus:outline-none focus:bg-blue-100">Join A Ministry</button>
                    </Link>
                    <button className="mt-6 ml-3 px-6 py-3 bg-gray-800 bg-opacity-0 border-2 border-gray-300 text-white text-sm uppercase font-medium rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-blue-100">Get Magazine</button>
                </div>
                
            </div>
        </>
    )
}