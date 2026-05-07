import React from "react";
import { HeroSection } from "./components/herosection";
import { Navbar } from "./components/navbar";
import { CategoriesSection}  from "./components/categoriessection";
import { ChooseUs} from "./components/chooseus";
import { TestimonSection} from "./components/TestimonSection";





export default function LandingPage(){
    return(
        <div>
            <Navbar/>
            <HeroSection  />  
             <ChooseUs/>
            <CategoriesSection />
           <TestimonSection/>
           
           
        </div>
    )
}