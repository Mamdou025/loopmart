import React from "react";
import { Carteproduit } from "./Carteproduit";
import { images } from "../App";

const listeimages = images.map(img=>{return(<Carteproduit src={img.src} auteur={img.auteur} montant={img.montant} profil={img.profil}  ></Carteproduit>)})
export default listeimages;