const router = require('express').Router();
let Produit = require('../models/Produit.model');

router.route('/').get((req, res) => {
  Produit.find()
    .then(produits => res.json(produits))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const src = req.body.src;
  const auteur = req.body.auteur;
  const montant = req.body.montant;
  const profil = req.body.profil;
  const description= req.body.description;
  const titre = req.body.titre;
 



  const newProduit = new Produit({src,auteur,montant,profil,description,titre});

  newProduit.save()
    .then(() => res.json('Produit Ajouté '))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
  Produit.findById(req.params.id)
    .then(produit => res.json(produit))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Produit Supprimé.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Produit.findById(req.params.id)
    .then(produit => {
      produit.src = req.body.src;
      produit.auteur = req.body.auteur;
      produit.montant = Number(req.body.montant);
      produit.profil = req.body.profil;
      produit.description = req.body.description;
      produit.titre = req.body.titre;

    


      produit.save()
        .then(() => res.json('Produit mis a jour !'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;