import { render } from "@testing-library/react";
import React from "react";
import {images} from "../App"
import { Panier,Panier2 } from "../App";
import { Modal } from "./Modal";




export class Seller extends React.Component{


  addToCart=()=>{

    Panier.push({src:`${this.props.src}`, montant:`${this.props.montant}`, auteur:`${this.props.auteur}` ,profil:`${this.props.profil}` ,description:`${this.props.description}`})
    console.log(Panier)
 }

 
  render(){
    return(
      <div>
      <div className="seller">
      <div className="options">
     <button type="button" className="btn btn-light plus" onClick={this.props.showModal}><i className="bi bi-arrows-angle-expand"id="expand"></i></button>
     <button type="button" className="btn btn-light plus" ><i className="bi bi-bookmark"></i></button>
    <button type="button" className="btn btn-light plus" onClick={this.props.Addproduct}><i className="bi bi-cart-plus"></i></button>

    </div>
         <span className="align-middle font-weight-bold ">{this.props.montant + "$"}</span>
      <div className="sellerinfo">
          <span  className="auteur">{this.props.auteur}</span>
        <img className="profil" src={this.props.profil} />
      </div>
    </div>
    <div><p className="font-weight-normal">{this.props.description}  </p></div>
    </div>
    )
  }

}





export class Carteproduit extends React.Component{

  constructor(){
    super();
    this.state={show:false ,list:Panier,value:[ { src:"https://images.unsplash.com/photo-1561641377-f7456d23aa9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" , auteur:'Verre', montant:25, profil:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,description:"eiciendis alias consequatur"}]};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
    console.log(this.state.show)
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render(){
    return (
    <div className="carteproduit">
      <a href={this.props.src}><img className="rectangle" src={this.props.src} /></a>


    <Seller Addproduct={this.props.Addproduct} showModal={this.showModal} show={this.state.show} src={this.props.src} montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
    
    <Modal hideModal={this.hideModal} show={this.state.show}  src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>

    
    </div>
    )
  }
}



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
      <div className="row listeproduits">
       



        {this.state.produits.map(img=>{return(
          <div className='col-xl-3  col-md-4  col-sm-6'>
            <Carteproduit Addproduct={this.Addproduct.bind(this, img.src, img.auteur, img.montant)} src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil} description={img.description} /></div>
        )
        })}
      </div>
              {this.state.cart.map(cartItem=>{return(<div><h5>. {cartItem.auteur} .</h5></div>)})}
              </div>

      
    )
  }
}