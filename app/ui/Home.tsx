import {FaCode, FaPalette, FaJsSquare, FaTasks} from "react-icons/fa";
import DetailsHeader from "./DetailsHeader";
import ProfileForm from "./ProfileForm";
import Footer from "./Footer";


export default function HomePage() {
    return(

        <>  
        <div className="hidden md:hidden lg:block  mt-48 justify-end "> 
           
              <DetailsHeader />
                
        </div>

        <div className="block md:block lg:hidden "> 
               <ProfileForm />

        </div>
        
            <section className="p-4  border border-gray-200 rounded-2xl my-4 mb-12 font-sans antialised"> 
            <div>    
                    <h1 className="text-4xl my-4"> About me  </h1>
                    <p> I am Creative full stack developer and Virtual assistant from Nigeria,  working in web development
                        and VA services. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                        <br />
                        My aim is to bring across your message and identity in the most creative way. I love solving problems and 
                        programming using javaScript.</p>
            </div>
            <div> 
                <h1 className="text-4xl my-4 ">What I do</h1>
                <div className="md:flex lg:flex p-1">   
                        <div className="md:mr-8"> 
                            <div className="flex  border my-6 p-4  rounded-xl hover:bg-gray-100 hover:border-0">
                                <p className=" p-2 pt-10 mr-2 text-4xl "> <FaPalette /></p>
                                <div className="p-1">
                                    <p className="text-2xl"> Web design </p>
                                    <p> I wire frame and create web prototypes using html and css as well as other design tools.</p>
                                </div>
                            </div>

                            <div className="flex  border my-6 p-4  rounded-xl hover:bg-gray-100 hover:border-0 ">
                                <p className=" p-2 mr-2 pt-10  text-4xl "> <FaCode />  </p>
                                <div className="p-1">
                                    <p className="text-2xl"> Web development </p>
                                    <p> this is the development of web apps from the front-end to the back-end.</p>
                                </div>
                            </div>
                        </div>

                        <div className=" "> 
                            <div className="flex border my-6 p-4 rounded-xl hover:bg-gray-100 hover:border-0 ">
                                <p className=" p-2 pt-10 mr-2 text-4xl "> <FaJsSquare /> </p>
                                <div className="p-1">
                                    <p className="text-2xl"> Programming  </p>
                                    <p>writing of javaScript code is my hobby and I use it to build web applications .</p>
                                </div>
                            </div>

                            <div className="flex  border my-6 p-4  rounded-xl hover:bg-gray-100 hover:border-0">
                                <p className=" p-2 pt-10 mr-2 text-4xl "> <FaTasks />  </p>
                                <div className="p-1">
                                    <p className="text-2xl"> Management </p>
                                    <p>I have good time and character management, including  project management skills expecially with tools like Asana.</p>
                                </div>
                            </div>
                        
                        </div>
                        

                       
                </div>
                    

            </div>
            
               
         </section>

         <div> <Footer  /> </div>
        </>
    )
}