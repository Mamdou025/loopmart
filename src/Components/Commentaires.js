import React from "react";
import { images } from "../App";


export class Options extends React.Component{
    render(){
        return(
            <div className="options">
              <div class="row" id="i1wj">
                 <div class="details ">
                     <p>Commentaires</p>
                 </div>
                  <div class="details ">
                  <p>Details</p>

                 </div>
                 <div class="details ">
                 <p>Produits similaires</p>
                 </div>
              </div>
           </div>

        )
    }
}

export class Commentaires extends React.Component{
    render(){
        return(
            <div className="row">
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