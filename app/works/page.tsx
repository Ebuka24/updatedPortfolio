import DetailsHeader from "../ui/DetailsHeader";
import weatherImg from "@/public/weatherImg.jpg";
import blogImg from "@/public/blogImg.jpg";
import fakestore from "@/public/fakestore.png";
import nextShopify from "@/public/nextShopify.png";
import cadispdf from "@/public/cadispdf.png"
import oprice from "@/public/oprice.png";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "../ui/MenuBar";
import Footer from "../ui/Footer";
// import {SlMenu} from "react-icons/sl";




export default function page() {
    return (
        <> 
                
         <div className="block md:block lg:hidden border border-gray-50 mb-20  "> 
              <div className=" text-center p-1 float-left text-xl font-sans antialised"> 
                Noble
              </div>
              <div className="float-right"> 
                <MenuBar  />
              </div>
             
          </div>

        <div className="hidden md:hidden lg:block  mt-48 justify-end">  
          <DetailsHeader />
          </div>
        <div className="border border-gray-200 rounded-3xl p-8 font-sans antialised font-semibold"> 
          <h1 className=" text-5xl"> Portfolio </h1>
          <p className="text-sm my-3 text-gray-500">You can click on the images to visit each web site</p>
          <h1 className="text-2xl my-5">Full Stack Apps</h1>
          <div className=" lg:flex md:flex flex-wrap my-5 "> 
            <div className="border border-gray-100 mr-10 p-2 lg:w-2/5 md:w-2/5 my-2 text-center rounded-xl hover:bg-gray-100 " >
            <Link href={"https://blog-weather-frontend-bgrf.vercel.app/blog"} className=" "> 
                <div className="">
                  <Image src={blogImg} alt="blog Image" />
                </div>
                <p className="p-3"> Blog </p>
                
            </Link>
            </div>

            <div className="border border-gray-100 p-2 lg:w-2/5 md:w-2/5 my-2 text-center rounded-xl hover:bg-gray-100 ">
            <Link href={"https://blog-weather-frontend-bgrf.vercel.app/weather%20app"}> 
                <div>
                  <Image src={weatherImg} alt="weather Image" className="w-full"/>
                </div>
                <p className="p-3">   Weather App</p>
               
            </Link>
             
            </div>

            
            <div className="lg:flex md:flex flex-wrap my-5 ">  
               <div className="border border-gray-100 mr-10 p-2 lg:w-2/5 md:w-2/5 my-2 text-center rounded-xl hover:bg-gray-100 ">
            <Link href={"https://fake-store-app-psi.vercel.app/"}> 
                <div>
                  <Image src={fakestore} alt="simple ecommerce store Image" className="w-full"/>
                </div>
                <p className="p-3">Simple ecommerce store </p>
               
            </Link>
             
            </div>

            <div className="border border-gray-100 p-2 lg:w-2/5 md:w-2/5 my-2 text-center rounded-xl hover:bg-gray-100 ">
            <Link href={"https://next-shopify-store-wldc.vercel.app/"}> 
                <div>
                  <Image src={nextShopify} alt="next + shopify Image" className="w-full"/>
                </div>
                <p className="p-3">   Next + Shopify app</p>
               
            </Link>
             
            </div>
            </div>

           

          </div>


          <div> 
            <h1 className="Font-sans text-2xl">Static sites</h1>
            
            <div className="lg:flex md:flex flex-wrap my-5"> 
               <div className="border border-gray-100 mr-10 p-2 lg:w-2/5 md:w-2/5 text-center rounded-xl sm:mb-3 hover:bg-gray-100 " >
            <Link href={"https://cadispdf.onrender.com"}> 
                <div>
                  <Image src={cadispdf} alt="cadis image" />
                </div>
                <p className="p-3"> Cadis-Pdf  </p>
                
            </Link>
            </div>

             <div className="border border-gray-100 mr-10 p-2 lg:w-2/5 md:w-2/5 text-center rounded-xl hover:bg-gray-100  " >
            <Link href={"https://oprice.onrender.com"}> 
                <div>
                  <Image src={oprice} alt="oprice Image" className=""/>
                </div>
                <p className="p-3 "> Oprice </p>
                
            </Link>
            </div>

            </div>
          </div>


        </div>

        <div > <Footer  /> </div>
          
        </>
    )
}