
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
  src:{ type: String, required: true },
  auteur:{ type: String },
  montant:{type:Number,required:true},
  profil:{ type: String, required: true },
  description: { type: String, required: true },
  titre: {  type: String, required: true,  unique: true,  trim: true,  minlength: 3},
 
 
 
 


}, {
  timestamps: true,
});

const Produit = mongoose.model('Produit', ProduitSchema);

module.exports = Produit;