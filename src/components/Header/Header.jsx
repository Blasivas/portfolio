import React, { useState } from "react";
import styles from "./styles.module.css";


export function Header() {

  const [active, setActive] = useState("inicio")

  
  

  return (
    <header className={styles.header}>
      <nav>
        <div>
          <a   href="#inicio">GUSTAVO</a>
        </div>
        
        
        <ul >

          <a style={active === "inicio" ? {borderBottom : "2px solid cyan"} : null} onClick={() => setActive("inicio")}     href="#inicio"><li>
            Inicio
          </li>
          </a>
          <a  style={active === "sobremim" ? {borderBottom : "2px solid cyan"} : null} onClick={() => setActive("sobremim")}    href="#sobremim"><li>
            sobre mim
          </li>
          </a>

          <a style={active === "projetos" ? {borderBottom : "2px solid cyan"} : null} onClick={() => setActive("projetos")} href="#projetos"><li>
            projetos
          </li>
          </a>

          <a style={active === "contato" ? {borderBottom : "2px solid cyan"} : null} onClick={() => setActive("contato")} href="#contato"><li>
            contato
          </li>
          </a>

        </ul>
      </nav>
    </header>
  );
}
