import { FaPlus } from "react-icons/fa";
export default function Anounce() {
    return (
     <main className="bg-black w-full h-[38px] flex justify-center items-center ">
         <div className="text-white first-line flex justify-center items-center">
            <h3>
                Sign up and get 20% off to your first order.
            </h3>
            <button >Sign Up Now</button>
            <div className="text-white flex justify-center items-center absolute right-[50px]">
        
            <FaPlus />
            </div>
            
         </div>

        
     </main> 
    )
  }
  