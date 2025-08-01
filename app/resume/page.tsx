"use client"

import DetailsHeader from "../ui/DetailsHeader";
import styles from "../styles/resume.module.css";
import MenuBar from "@/app/ui/MenuBar";
import Footer from "../ui/Footer";


export default function page() {

  
    return (
        <>

        <div>
          <div className="block md:block lg:hidden border border-gray-50  "> 
            <div className=" text-center p-1 float-left text-xl font-sans antialised"> 
              Noble
            </div>
            <div className="float-right"> 
              <MenuBar  />
            </div>
           
        </div>
        </div>
        
        <div className="hidden md:hidden lg:block  mt-48 "> 
          <DetailsHeader />
        </div>
        
        <section className="border rounded-3xl p-3 font-sans text-gray-800 antialised mt-20 md:mt-20 lg:mt-0"> 
            <div className="flex ">     
                    <h1 className="text-3xl mx-6 font-serif font-bold ">Resume </h1>
                    <hr />
            </div>

          <div className="mt-5 font-sans antialised w-full " >
            <div className="flex flex-wrap grow shrink w-full">

              <div className="ml-5 mb-5  w-full md:w-full lg:w-5/12 ">
                <h1 className="text-xl font-medium mx-2">Education</h1>
                <div className="rounded-xl p-4  border mt-2 ">
                 <p className="text-gray-700 text-md font-medium">2023</p> 
                 <p className="text-black text-2xl lg:text-xl">B.Sc in Computer Science</p>
                 <p className=" text-black">ISCG </p>
                </div>

                <div className="rounded-xl p-4  border mt-2">
                  <p className="text-gray-700 text-md font-medium">2023</p>
                  <p className="text-black text-2xl lg:text-xl"> AI Career essentials</p>
                  <p className=" text-black">ALX</p>
                </div>


                <div className="rounded-xl p-4  border mt-2">
                  <p className="text-gray-700 text-md font-medium">2024</p>
                  <p className="text-black text-2xl lg:text-xl">Virtual assitance Program</p>
                  <p className="text-black">ALX</p>
                </div>

              </div>
              <div className="font-sans antialised ml-5 w-full md:w-full lg:w-5/12 ">
                <h1 className="text-xl font-medium mx-2">Experience </h1>
                <div>
                <div className="rounded-xl p-4  border mt-2 whitespace-nowrap">
                 <p className="text-gray-700 text-md font-medium">2022 till date</p> 
                 <p className="text-black text-2xl lg:text-xl">Freelancing</p>
                 <p className=" text-black">Web Design</p>
                </div>

                <div className="rounded-xl p-4  border mt-2 ">
                  <p className="text-gray-700 text-md font-medium">2024 till Date</p>
                  <p className="text-black text-2xl lg:text-xl">Personal projects/ freelancing</p>
                  <p className=" text-black">Full Stack web development</p>
                </div>


                <div className="rounded-xl p-4  border mt-2 whitespace-nowrap">
                  <p className="text-gray-700 text-md font-medium">2024 - 04/2025 </p>
                  <p className="text-black  text-2xl lg:text-xl">Freelancing (facebook) </p>
                  <p className="text-black ">Social media managent/VA</p>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div  className="mt-8 lg:flex sm:w-full md:w-full">
          <div className="lg:w-96  sm:w-full md:w-full "> 
            <h1 className=" text-2xl my-5 mx-1">Working Skills</h1>
              <div className="my-6 mr-5 ml-2 font-sans antialised font-semibold text-gray-700 ">
                <div className="my-3">
                  <div className="flex   justify-between items-center w-full ">
                    <p className="  "> Front-end Dev </p> <span>80%</span>
                  </div>

                  <div className={styles.borderDesignFrontEnd}> </div> 
              </div>
                <div className="my-6">
                  <div className="   flex justify-between items-center w-full ">
                    <p className=" text-left "> Backend Dev </p> <p className="text-right ">75%</p>
                  </div>

                  <div className={styles.borderDesignBackEnd}> </div>
                </div>

                <div className=" my-6">
                  <div className="flex justify-between items-center w-full">
                    <p className=" "> Web design </p> <span>90%</span>
                  </div>

                  <div className={styles.borderDesign}> </div>
                </div>

            </div>
          </div>

          <div className=" lg:w-96 sm:w-full md:w-full">
            <h1 className="text-2xl mt-5">Knowledges</h1>
            <div className="font-sans antialised font-semibold text-gray-500 my-5 flex flex-wrap  ">
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">Social media Mngt</div> 
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">Virtual assistance</div>
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">AI prompt Engineering </div>
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">Creative writing</div> 
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">Time management</div>
                <div className="px-2 py-1 bg-gray-100 rounded-lg my-2 mx-2">Critical thinking</div>
            </div>
          </div>

          </div>
          

          </section>
          <div> <Footer  /> </div>
        </>
    )
}