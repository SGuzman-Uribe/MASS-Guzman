import React from "react";
import logoMass from '../../src/logoBlanco.jpeg';
import './NavBar.css';


export default function NavBar(){
    return (
        <div>
            <ul className="Ul-Logo">
                <li>
                    <img src={logoMass} className="Mass-logo" alt="logo" />                    
                </li>
            </ul>
            <ul className="NavBar">
                <li>
                    <a href="#">Home</a>    
                </li>  
                <li>
                    <a href="#">Productos</a>    
                </li>  
                <li>
                    <a href="#">Contacto</a>    
                </li>  
                
            </ul>
        </div>)
}