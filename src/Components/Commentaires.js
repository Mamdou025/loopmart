import React from "react";
import { images } from "../App";





function Comment(){
   const descrip = document.getElementById("descid")
   if(document.getElementById("coms").style.display==="none"){
       console.log('oui none ')
    document.getElementById("coms").style.display = "block"
   }
   descrip.style.display="none"
   document.getElementById("coms").style.display = "block"
}



function Desc(){
    const comms = document.getElementById("coms")
    if(document.getElementById("descid").style.display ==="none"){
        console.log('oui none')
        document.getElementById("descid").style.display = "block"
       }
    comms.style.display="none"
 }



export class Options extends React.Component{
    render(){
        return(
            <div className="options">
              <div className="row" id="i1wj">
                 
                     <button className="details" onClick={Comment}><p>Commentaires <i className="bi bi-filter-left"></i></p></button>
                     <button className="details" onClick={Desc}><p>Details <i className="bi bi-blockquote-left"></i></p></button>
                 
                 
                
              </div>
           </div>

        )
    }
}

export class Commentaires extends React.Component{
    render(){
        return(
            <div className="row" id="coms">
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
            <div className="row" id="descid">
                <div className="descrip">
                    <h4 className="opt1">{this.props.montant}</h4>
                <h5>Description</h5>
                <div className="row"> <p className="opt1">{this.props.description}</p></div>
                </div>
               
               
                <div className="optionscontact">
                    <div className="opt1">
                    <h6>Contacter</h6>
                    <button type="button" className="btn btn-light plus"><i className="bi bi-whatsapp bigger"></i></button>
                    </div>
                    <div className="opt1">
                    <h6>Ajouter au panier</h6>
                    <button type="button" className="btn btn-light plus"><i className="bi bi-cart-plus bigger"></i></button>
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