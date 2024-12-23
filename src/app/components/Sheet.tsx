"use client"
 
import { Button } from "@/components/ui/button"

import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "lucide-react";

 
const SHEET_SIDES = ["left"] as const
 
type SheetSide = (typeof SHEET_SIDES)[number]
 
export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
             <IoMdMenu className="text-xl md:hidden"/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.Co</SheetTitle>

           
            </SheetHeader>
            <ul className="">
              <li >
                <Link href={""}> Shop</Link>
                <Link href={""}> On Sale</Link>
                <Link href={""}> New Arrivals</Link>
                <Link href={""}> Brands</Link>



              </li>

          </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}