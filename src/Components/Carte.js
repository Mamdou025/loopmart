import React from "react"
import { Panier } from "../data/images"
import { Modal } from "./Modal"
import axios from 'axios';


export const handleWhatsApp = (item) => {
  const imageUrl = item.src && item.src.startsWith('http') ? item.src : `${window.location.origin}${item.src}`;
  const message = `${item.titre} - ${item.montant} ${imageUrl}`;
  const url = `https://wa.me/5147727974?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};







export class Seller extends React.Component{


    addToCart=()=>{
  
      Panier.push({src:`${this.props.src}`, montant:`${this.props.montant}`, auteur:`${this.props.auteur}` ,profil:`${this.props.profil}`,titre:`${this.props.titre}` ,description:`${this.props.description}`})
      console.log(Panier)
      console.log(this.props.titre)
   }
  
   
    render(){
      return(
        <div className="productinfo" id={this.props.idproductInfo}>
        <div className="seller">
        <div className="options">
       <button type="button" className="btn btn-light plus" data-toggle="modal" data-target={"#"+`${this.props.auteur+this.props.montant}`}   ><i className="bi bi-arrows-angle-expand"id="expand"></i></button>
       <button type="button" className="btn btn-light plus" ><i className="bi bi-bookmark"></i></button>
      <button type="button" className="btn btn-light plus" onClick={this.props.Addproduct}><i className="bi bi-cart-plus"></i></button>
  
      </div>
      <p className="text-sm-center">{this.props.titre}</p>

           <span className="align-middle font-weight-bold ">{this.props.montant + "$"}</span>
        <div className="sellerinfo">
          <img  className="profil" src={this.props.profil} />
        </div>
      </div>
      </div>
      )
    }
  
  }
  
  export class Sellerig extends React.Component{


    addToCart=()=>{
  
      Panier.push({src:`${this.props.src}`, montant:`${this.props.montant}`, auteur:`${this.props.auteur}` ,profil:`${this.props.profil}`,titre:`${this.props.titre}` ,description:`${this.props.description}`})
      console.log(Panier)
      console.log(this.props.titre)
   }
  
   
    render(){
      return(
        <div className="productinfo" id={this.props.idproductInfo}>
        <div className="seller">
        <div className="options">
       <button type="button" className="btn btn-light plus" data-toggle="modal" data-target={"#"+`${this.props.auteur+this.props.montant}`}   ><i className="bi bi-arrows-angle-expand"id="expand"></i></button>
       <button type="button" className="btn btn-light plus" ><i className="bi bi-bookmark"></i></button>
      <button type="button" className="btn btn-light plus" onClick={this.props.Addproduct}><i className="bi bi-cart-plus"></i></button>
  
      </div>
      <p className="text-sm-center">{this.props.titre}</p>

           <span className="align-middle font-weight-bold ">{this.props.montant + "$"}</span>
        <div className="sellerinfo">
        </div>
      </div>
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
      console.log('modal shown')
      this.setState({ show: true });

    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    

    hideDetails =()=>{
      const modetails = document.getElementById(`${this.props.auteur+this.props.montant+"info"}`)
      modetails.classList.remove("Shown")
      console.log(modetails)
 
     }

  
  
    render(){
      return (
      <div className="carteproduit">
        <img  className="rectangle" src={this.props.src}   />
  
  
      <Seller titre={this.props.titre} idproductInfo={`${this.props.auteur+this.props.montant+"info"}`} hideModal={this.hideModal} showModal={this.showModal} Addproduct={this.props.Addproduct} src={this.props.src} montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description}/>
      
      <Modal Addproduct={this.props.Addproduct} show={this.state.show} src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.props.description} titre={this.props.titre}/>
  
      
      </div>
      )
    }
  }
  



  export class InstaCarteproduit extends React.Component{
  
    constructor(){
      super();
      this.state={show:false , igsrc:'', igdesc:''};
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }



    componentDidMount() {
      console.log("hellooooo! ")
      const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api2.binance.com/api/v3/ticker/24hr',
 
};

axios.request(options)
.then(response =>{
	console.log(response.data);
  
})
.catch(function (error) {
	console.error(error);
});

    }
  
    showModal = () => {
      console.log('modal shown')
      this.setState({ show: true });

    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    

    hideDetails =()=>{
      const modetails = document.getElementById(`${this.props.auteur+this.props.montant+"infoinsta"}`)
      modetails.classList.remove("Shown")
      console.log(modetails)
 
     }

  
  
    render(){
      return (
        <div class="col-xl-3  col-md-4  col-sm-6">
          
      <div className="imageContainer">
        <iframe className="rectangleig" id="instagram-embed-0" src= "https://www.instagram.com/p/CejtU9KpPC-/embed/captioned/?cr=1&amp;v=14&amp;wp=243&amp;rd=http%3A%2F%2Flocalhost%3A5500&amp;rp=%2FList.html#%7B%22ci%22%3A0%2C%22os%22%3A555.6000001430511%2C%22ls%22%3A353.10000014305115%2C%22le%22%3A388.10000014305115%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"/ >
  
  
      
      <Modal Addproduct={this.props.Addproduct} show={this.state.show} src={this.props.src}  montant={this.props.montant} auteur={this.props.auteur} profil={this.props.profil} description={this.state.igdesc}/>
  
      
      </div>
      </div>
      )
    }
  }
