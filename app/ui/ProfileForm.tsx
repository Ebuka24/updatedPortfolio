

import { BsFacebook,BsTwitter,BsLinkedin,BsWhatsapp,BsPhone } from "react-icons/bs";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import fbimg3 from  "@/public/fbimg3.jpg";
import styles from "@/app/styles/ProfileForm.module.css";
import MenuBar from "./MenuBar";



export default function ProfileForm() {
  return(
    <>
    
          <div className="block md:block lg:hidden border border-gray-50 m-3  "> 
            <div className=" text-center p-1 float-left mx-2 text-xl font-sans antialised"> 
              Noble
            </div>
            <div className="float-right"> 
              <MenuBar  />
            </div>
           
        </div>

    
    <section className="w-full bg-gray-200 p-4 rounded-2xl my-24 font-sans antialised ">
      <div className=" px-2 border  justify-center flex "> 
          <Image className="rounded-3xl grow-0 " src={fbimg3} alt="Profile Image" />
      </div>
      <div className="mx-24 whitespace-nowrap  text-center"> 
          <h1 className=" text-2xl ">C.N Chinweuba</h1>
          <p className="text-lg pl-1"> Web developer(JS) </p>
          <p>
            <button className="mx-1 border text-xl p-2 text-blue-600"> <Link href={"#"}> <BsFacebook /> </Link> </button>
            <button className="mx-1 border text-xl  p-2 text-blue-800"> <Link href={"#"}> <BsLinkedin /> </Link> </button>
            <button className="mx-1 border text-xl p-2 text-blue-400"> <Link href={"#"}> <BsTwitter /> </Link> </button>
            <button className="mx-1 border text-xl  p-2 text-green-600"> <Link href={"#"}> <BsWhatsapp /> </Link> </button>
          </p>
      </div>
      
     <div className=""> 
          <div className="bg-gray-300 my-8 px-4 mx-1 py-6 rounded-2xl">

            <div className="flex border-b border-gray-400 py-2">
              <div className="border bg-gray-100 rounded-lg shadow-2xl text-center p-3 text-xl mr-2 "> <BsPhone /> </div>
              <div className="">
                <p> Phone </p>
                <p> +234 7045372928</p>
              </div>
            </div>

            <div className="flex border-b border-gray-400  my-4 py-2">
              <div className="border bg-gray-100 rounded-lg s shadow-2xl text-center p-3 text-xl mr-2 "> <MdLocationOn /> </div>
              <div className="">
                <p> location </p>
                <p> Nigeria</p>
              </div>
            </div>

            <div className="flex border-b border-gray-400  my-4 py-2">
              <div className="border bg-gray-100 rounded-lg  shadow-2xl text-center p-3 text-xl mr-2 "> <FaEnvelope /> </div>
              <div className="">
                <p> Email </p>
                <p className=" text-lg  lg:text-sm"> chinweubachukwuebuka28@gmail.com</p>
              </div>
            </div>

            <div className="flex  my-4 py-2">
              <div className="border bg-gray-100 rounded-lg shadow-2xl text-center p-3 text-xl mr-2"> <FaCalendarAlt /> </div>
              <div className="">
                <p> Birthday </p>
                <p> 12th March</p>
              </div>
            </div>

          </div>
     </div>
        <div className="w-full  text-center">
          <button className={styles.button}><a href="/cv.pdf" download={"cv"}> Download CV </a> </button>
      </div>
     
    </section>
    </>
  )
}