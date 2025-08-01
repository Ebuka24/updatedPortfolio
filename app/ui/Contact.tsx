
import { AiOutlinePhone } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import DetailsHeader from "./DetailsHeader";
import styles from "@/app/styles/contact.module.css";
import MenuBar from './MenuBar';
import Footer from './Footer';



export default function Contact() {
    return (

        <>

         <div className="block md:block lg:hidden border border-gray-50 mb-20  "> 
                      <div className=" text-center p-1 float-left text-2xl font-sans antialised"> 
                        Noble
                      </div>
                      <div className="float-right"> 
                        <MenuBar  />
                      </div>
                     
                  </div>

            <div className="hidden md:hidden lg:block  mt-48 justify-end ">

                <DetailsHeader />

            </div>

            

            <section className="p-10  border border-gray-200 rounded-3xl mt-7 mb-12 font-sans antialised text-gray-800">
                <div>
                    <h1 className="text-4xl my-4">
                    <span> Contact  </span> 
                    </h1>
                    <p> I am Creative full stack developer and Virtual assistant from Nigeria,  working in web development
                        and VA services. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                        <br />
                        My aim is to bring across your message and identity in the most creative way. I love solving problems and 
                        programming using javaScript.</p>
                </div>
                <div>
                    <div className="md:flex lg:flex lg:flex-wrap">
                        <div className="md:mr-6 lg:mr-6">
                            <div className="flex  border my-4 p-4  rounded-xl">
                                <p className=" p-4 text-4xl rotate-90 "> <AiOutlinePhone /> </p>
                                <div className="p-2">
                                    <p className="text-2xl"> Phone: </p>
                                    <p> +2347045372928</p>
                                </div>
                            </div>

                           
                        </div>

                        <div className="md:mr-6 lg:mr-6 ">
                            <div className="flex border my-4 p-4 rounded-xl">
                                <p className=" p-4 mr-2 text-4xl "> < MdEmail /> </p>
                                <div className="p-2">
                                    <p className="text-2xl"> Email </p>
                                    <p>chinweubachukwuebuka28@gmail.com</p>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>


               
                    <div className="text-center text-xl mt-2">
                        I am always open to discussing products
                        design work or patnerships
                    </div>

                    <form className="lg:my-0 my-2 md:my-2 text-center items-center p-0 md:p-2 " action={"ebuka.assists@gmail.com"}>
                      
                        <input className="block my-12 w-3/4 ml-16 border-b-4 border-gray-400 outline-0 "   placeholder="Name *" type="text" />
                        
                        <input className="block my-12 w-3/4  ml-16  border-b-4 border-gray-400 outline-0" placeholder="Email *" type="text" />
                        
                        <input className="block my-12 w-3/4  ml-16 border-b-4 border-gray-400 outline-0" placeholder="Message *" type="text" />
                        
                        <button className={styles.button}> Submit </button>
                        
                    </form>

              


            </section>

            <div> <Footer  /> </div>
        </>
    )
}