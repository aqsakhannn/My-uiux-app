import Link from "next/link";
import { BsSearchHeartFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { SheetSide } from "./sheet";

export default function Header() {
  return (
   <header className="bg-grey-500 w-full h-[60px] flex justify-between items-center ">
         <div className="flex justify-center item-center">
          <SheetSide/>
          
            {/*navbar*/}
          <h1 className="text-3xl font-bold sm:pl-2">SHOP.CO</h1>
          </div>
          <ul className="hidden md:block">
              <li className="space-x-5 ">
                <Link href={""}> Shop</Link>
                <Link href={""}> On Sale</Link>
                <Link href={""}> New Arrivals</Link>
                <Link href={""}> Brands</Link>



              </li>

          </ul>
          {/*serach bar*/}
          <div className="hidden md:block">
                <div className=" flex justify-between items-center w-[400px] h-[40px] bg-[#F0F0F0] rounded-[62px]">

               <BsSearchHeartFill className="text-xl m-2"/>
                 <input placeholder="Search for products..." className="w-full h-full font-Santoshi bg-[#F0F0F0] rounded-[62px] " />

          </div>
            </div>  
          
             <div className="flex justify-center space-x-3 right-4">
             <IoCartOutline className="text-2xl" />
             <CgProfile className="text-2xl"/> 
             </div>
        </header>
  )
}