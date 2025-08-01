import Details from "../ui/Home";
import Link from "next/link";





export default function page() {
    return (
        <> 
        <button className="bg-white"> <Link href={"/mydetails/resume"}> Go to resume </Link></button>
        <Details />
        </>
    )
}