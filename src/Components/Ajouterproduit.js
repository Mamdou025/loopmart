import React from "react";
import { Entete } from "./Entetes";
import { SectionAccueil2 } from "./SectionAccueil";


export class AjouterProduit extends React.Component{
    render(){
        return( <div>
        
        <SectionAccueil2/>
        <Entete titre={'Ajouter Un Produit'} />

        <form className="card">
  <div class="form-group">
    <label for="exampleInputtitre1">Titre</label>
    <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer titre"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputimg">Lien image</label>
    <input required type="text" class="form-control" id="exampleInputimg" aria-describedby="img" placeholder="Entrer lien image"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Prix</label>
    <input required type="number" class="form-control" id="exampleInputPassword1" placeholder="Prix"/>
  </div>
  
  <div class="form-group">
    <label class="form-group" for="exampleCheck1">Description</label>
    <textarea type="text" rows="3" class="form-control" id="exampleCheck1"/>  
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
 
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
       

        
        </div>)
    }
}