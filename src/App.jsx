import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects"


export default function App() {
  return (
    
      <div className="main-template">
        <Header/>
        <Main />
      
        <About />
     

      
        <Skills />


        <Projects/>
      </div>

      
        
     
    
  );
}
