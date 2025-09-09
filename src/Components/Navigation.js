import React from "react";
import {images} from '../data/images'
import { Link,NavLink } from "react-router-dom";
import { SectionAccueil2 } from "./SectionAccueil";

export class Navigation extends React.Component{
render(){
    return(<div>
        
      

        <div className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top top-nav-collapse navigation">

                    <NavLink to="/" className="navbar-brand logo-image" ><img className ="imagea"src="https://i.ibb.co/1sPG7sX/imageedit-58-3688987062.png" alt="alternative"/></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                             <span><i className="bi bi-list"></i></span>
                             <span ><i className="bi bi-x-lg"></i></span>

                   </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link page-scroll"><span className="menuitem">Accueil <i className="bi bi-house-door-fill"></i>  </span><span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/Collection">Ma collection <i className="bi bi-bookmarks-fill"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/Messages">Messages <i className="bi bi-chat-left-fill"></i>  </NavLink>
                </li>

              


                <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/Ajouter">Ajouter un produit  <i className="bi bi-plus-square-fill"></i></NavLink>
                </li>

                

                <li className="nav-item">
                    <NavLink to="/panier" className="nav-link page-scroll" >Panier <i className="bi bi-bag-fill"></i><span className='badge badge-warning' id='lblCartCount'> {this.props.cartcount} </span></NavLink>
                </li>
            </ul>

            
            <span className="nav-item social-icons">
            <img className="profil" src={images[0].profil} />
            </span>
        </div>

        </div>
                <SectionAccueil2/>
           </div>

    
    )
}

}