const router = require('express').Router();
const Produit = require('../models/Produit.model');

router.route('/').get((req, res) => {
  Produit.find()
    .then((produits) => res.json(produits))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { src, auteur, montant, profil, description, titre, category } = req.body;

  const newProduit = new Produit({ src, auteur, montant, profil, description, titre, category });

  newProduit
    .save()
    .then(() => res.json('Produit Ajouté '))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Produit.findById(req.params.id)
    .then((produit) => res.json(produit))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Produit Supprimé.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Produit.findById(req.params.id)
    .then((produit) => {
      produit.src = req.body.src;
      produit.auteur = req.body.auteur;
      produit.montant = Number(req.body.montant);
      produit.profil = req.body.profil;
      produit.description = req.body.description;
      produit.titre = req.body.titre;
      produit.category = req.body.category;

      produit
        .save()
        .then(() => res.json('Produit mis a jour !'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
