"use client"
import styles from "../styles/MenuBar.module.css";
import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {  FaFileAlt, FaUser } from "react-icons/fa";
import { MdWork, MdHome } from "react-icons/md";




export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);


    


    return(
        <>
            <div>
                <div className={styles.bar1} > </div>
                <div onClick={()=> setIsOpen(!isOpen)} className="w-8 h-8 transition duration-1000 ease-in-out">

                    {
                        isOpen ? (<span className="text-3xl"> <XMarkIcon /> </span>)  : (<span className="text-3xl"> <Bars3Icon /> </span>)
                    } 
                   
                </div>

                {
                    isOpen && (
                        <div  className="absolute ml-2 left-1/2 transform -translate-x-1/2 top-15 bg-white shadow-lg rounded p-4 w-11/12 ">

                        <nav className="bg-white py-3 rounded-2xl w-full "> 
                           <div className={styles.home}>
                                <Link href={"/"} className="inline-block flex"> 
                                <div className=" py-1 pr-3 " > <MdHome /> </div>
                                <p className=""> Home </p>
                                </Link>
                            </div>
        
                            <div className={styles.resume}>
                                <Link href={"/resume"} className="inline-block flex"> 
                                <div className=" py-1 pr-3 "> <FaFileAlt /> </div>
                                <p> Resume </p>
                                </Link>
                            </div>
        
                            <div className={styles.works}>
                                <Link href={"/works"} className="inline-block flex"> 
                                <div className="py-1 pr-3"><MdWork /> </div>
                                <p> Works </p>
                                </Link>
                            </div>
                            <div className={styles.contact}>
                                <Link href={"/contact"} className="inline-block flex">
                                <div className="py-1 pr-3"><FaUser /> </div>
                                <p> Contact </p>
                                </Link>
                            </div>
                </nav>
                          
                         </div>
                    )}
            </div>
        
        </>
    )
}