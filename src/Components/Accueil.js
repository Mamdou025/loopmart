import { render } from "@testing-library/react";
import React from "react";
import {images} from "../App"
import { Panier,Panier2 } from "../App";
import { Modal } from "./Modal";
import { Navigation } from './Navigation';
import './Carte'
import { Carteproduit } from "./Carte";
import { Entete } from  './Entetes';
import { Featuredlistings } from './FeaturedListings';
import { SectionAccueil } from './SectionAccueil';







  export  class Listeproduits extends React.Component {
    render() {

      return (
      
       
          <div className="row listeproduits">
         
               {images.map(img=>{return(<div className='col-xl-3  col-md-4  col-sm-6'><Carteproduit  src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>)})}
          </div>
       
        
      );
    }
  }


 

export class Mycart extends React.Component{
constructor(){
  super();
 this.state={ produits:images,cart:[ { src:"https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" , auteur:'Polaroid', montant:220, profil:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,description:"minim veniam, quis nostrud exercitation ullamco   "}]}
}
Addproduct(src,auteur,montant,profil,description){
  console.log('Added')
  let kart = this.state.cart ;
  console.log(kart)
  console.log(this.state.cart)
  let product = {
    "src":src,
    "auteur":auteur,
    "montant":montant,
    "profil":profil,
    "description":description
  }
  kart.push(product)
  this.setState({cart:kart})
  console.log(this.state.cart)
}


  render(){
    return(
      <div>
      <Navigation cartcount={this.state.cart.length} />
       <SectionAccueil/>
       <Entete titre={'En vedette'}/>
       <Carteproduit   Addproduct={this.Addproduct.bind(this, images.at(-7).src,images.at(-1).auteur, images.at(-1).montant)}  src={images.at(-7).src} auteur={images.at(-1).auteur} montant={images.at(-1).montant} profil={images.at(-1).profil} description={images.at(-1).description} />
       <Carteproduit   Addproduct={this.Addproduct.bind(this, images.at(-2).src,images.at(-3).auteur, images.at(-6).montant)}  src={images.at(-11).src} auteur={images.at(-4).auteur} montant={images.at(-3).montant} profil={images.at(-2).profil} description={images.at(-8).description} />

       <Entete titre={'Speciales'}/>
      <Featuredlistings  Addproduct={this.Addproduct.bind(this, images.at(-7).src,images.at(-1).auteur, images.at(-1).montant)}  src={images.at(-7).src} auteur={images.at(-1).auteur} montant={images.at(-1).montant}/>
       <Entete titre={'liste de produits'} />
      <div>
      <div className="row listeproduits">
        {this.state.produits.map(img=>{return(
          <div className='col-xl-3  col-md-4  col-sm-6'>
            <Carteproduit Addproduct={this.Addproduct.bind(this, img.src, img.auteur, img.montant)} src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>
        )
        })}
      </div>
              {this.state.cart.map(cartItem=>{return(<div><h5>. {cartItem.auteur} .</h5></div>)})}
              </div>


              </div>

      
    )
  }
}