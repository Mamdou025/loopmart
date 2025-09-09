import React from "react";
import { images } from "../data/images";
import { handleWhatsApp } from "./Carte";








export class Options extends React.Component{
    constructor(){
        super();
    }


    Comment=()=>{
        const descrip = document.getElementById(`${this.props.iddesc}`)
        console.log(this.props.iddesc)
        console.log(descrip)
   if(document.getElementById(`${this.props.idcom}`).style.display==="none"){
       console.log('oui none ')
    document.getElementById(`${this.props.idcom}`).style.display = "block"
   }
   descrip.style.display="none"
   document.getElementById(`${this.props.idcom}`).style.display = "block"
    }


    Desc=()=>{
        const comms = document.getElementById(`${this.props.idcom}`)
        console.log(this.props.idcom)
        console.log(comms)
    if(document.getElementById(`${this.props.iddesc}`).style.display ==="none"){
        console.log('oui none')
        document.getElementById(`${this.props.iddesc}`).style.display = "block"
       }
    comms.style.display="none"
    
    }



    render(){
        return(
            <div className="options">
              <div className="row" id="i1wj">
                 
                     <button className="details" onClick={this.Comment}><p>Commentaires <i className="bi bi-filter-left"></i></p></button>
                     <button className="details" onClick={this.Desc}><p>Details <i className="bi bi-blockquote-left"></i></p></button>
                 
                 
                
              </div>
           </div>

        )
    }
}

export class Commentaires extends React.Component{
    render(){
        return(
            <div className="row hideit" id={this.props.idcom}>
    <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Ajouter un commentaire" className="form-control addtxt"/> </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[9].profil} width="18"/><span className="text2">{images[9].auteur}</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[8].profil} width="18"/><span className="text2">{images[8].auteur}</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[7].profil} width="18" height="18"/><span className="text2">{images[7].auteur}</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[6].profil} width="18"/><span className="text2">{images[12].auteur}</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[5].profil} width="18" height="18"/><span className="text2">{images[6].auteur}</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[4].profil} width="18"/><span className="text2">{images[10].auteur}</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[3].profil} width="18" height="18"/><span className="text2">{images[11].auteur}</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img className="profil" src={images[2].profil} width="18"/><span className="text2">{images[3].auteur}</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    </div>
    
    
        )
    }
}



export class Description extends React.Component{


    
    render(){
        return(
            <div className="row" id={this.props.iddesc}>
                <div className="descrip">
                    <h4 className="opt1 ">{this.props.montant}</h4>
                <h5>Description</h5>
                <div > <p className="opt1  ">{this.props.description}</p></div>
                </div>
               
               
                <div className="optionscontact">
                    <div className="opt1">
                    <h6>Contacter</h6>
                    <button type="button" className="btn btn-light plus" onClick={() => handleWhatsApp({titre: this.props.titre, montant: this.props.montant, src: this.props.src})}><i className="bi bi-whatsapp bigger"></i></button>
                    </div>
                    <div className="opt1">
                    <h6>Ajouter au panier</h6>
                    <button
                      type="button"
                      className="btn btn-light plus"
                      onClick={() =>
                        this.props.Addproduct({
                          src: this.props.src,
                          auteur: this.props.auteur,
                          montant: this.props.montant,
                          profil: this.props.profil,
                          titre: this.props.titre,
                          description: this.props.description,
                          id: this.props.id,
                        })
                      }
                    >
                      <i className="bi bi-cart-plus bigger"></i>
                    </button>
                    </div>
                    <div className="opt1">
                    <h6>Enregistrer</h6>
                    <button type="button" className="btn btn-light plus"><i className="bi bi-bookmark bigger"></i></button>
                    </div>
                   
                    
                   

                </div>
            </div>
        )
    }
}