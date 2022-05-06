import React from "react";
import {images, Navbarl} from '../App'

export class Navigation extends React.Component{
render(){
    return(
        
      

        <div className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top top-nav-collapse navigation">
                    <a className="navbar-brand logo-image" href="index.html"><img className ="imagea"src={Navbarl.logo} alt="alternative"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                             <span><i className="bi bi-list"></i></span>
                             <span ><i className="bi bi-x-lg"></i></span>

                   </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header"><span className="menuitem">Accueil <i className="bi bi-house-door-fill"></i>  </span><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">Ma collection <i className="bi bi-bookmarks-fill"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">Messages <i className="bi bi-chat-left-fill"></i>  </a>
                </li>

                <li className="nav-item">
                   <a className="nav-link page-scroll" href="Galerie.html">Boutiques suivis  <i className="bi bi-plus-square-fill"></i></a>
               </li>


                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">Contact <i className="bi bi-telephone-fill"></i></a>
                </li>

                

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">Panier <i className="bi bi-bag-fill"></i></a>
                </li>
            </ul>
            <span className="nav-item social-icons">
            <img className="profil" src={images[6].profil} />
            </span>
        </div>


        </div>
    
    )
}

}