import React from 'react';
import { Carteproduit } from './Carte';

export const CollectionList = ({ items, Addproduct, AddtoCollection }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className='row'>
      {items.map((img) => (
        <div className='col-xl-3 col-md-4 col-sm-6' key={img.id}>
          <Carteproduit
            Addproduct={() => Addproduct(img)}
            AddtoCollection={AddtoCollection}
            id={img.id}
            src={img.src}
            auteur={img.auteur}
            montant={img.montant}
            profil={img.profil}
            description={img.description}
            titre={img.titre}
            category={img.category}
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
