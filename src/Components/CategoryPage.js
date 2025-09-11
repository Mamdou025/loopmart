import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionList from './CollectionList';
import Breadcrumbs from './Breadcrumbs';

const CategoryPage = ({ produits = [], Addproduct, AddtoCollection }) => {
  const { name } = useParams();
  const items = produits.filter((p) => p.category === name);

  return (
    <div className="container mt-4">
      <Breadcrumbs />
      <h2 className="mb-4 text-capitalize">{name}</h2>
      <CollectionList
        items={items}
        Addproduct={Addproduct}
        AddtoCollection={AddtoCollection}
      />
    </div>
  );
};

export default CategoryPage;
