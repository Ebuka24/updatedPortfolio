"use client"

import Link from "next/link";
import {  FaFileAlt, FaUser } from "react-icons/fa";
import { MdWork, MdHome } from "react-icons/md";
import styles from "../styles/DetailsHeader.module.css";

export default function DetailsHeader() {
    return (
        <  > 

       
              
              <div className="flex mb-2 text-center mt-4  justify-end   font-sans antialised">
                
                <nav className="flex bg-white py-5 px-3 justify-end rounded-2xl w-fit"> 
                 <div className={styles.home}>
                        <Link href={"/"} > 
                        <div className=" px-4    " > <MdHome /> </div>
                        <p> Home </p>
                        </Link>
                    </div>

                    <div className={styles.resume}>
                        <Link href={"/resume"}> 
                        <div className="px-4"> <FaFileAlt /> </div>
                        <p> Resume </p>
                        </Link>
                    </div>

                    <div className={styles.works}>
                        <Link href={"/works"}> 
                        <div className="px-4"><MdWork /> </div>
                        <p> Works </p>
                        </Link>
                    </div>
                    <div className={styles.contact}>
                        <Link href={"/contact"}>
                        <div className="px-4"><FaUser /> </div>
                        <p> Contact </p>
                        </Link>
                    </div>
                </nav>
                   
                </div>

                

           

              
        
           
        </>
    )
}