import React from 'react';
import { getCategories } from '@/servicesApi/Api';
import Homecartmap from './Homecartmap';

const Homecarts = async () => {
  const products = await getCategories();

  return (
    <section className="px-5 my-10">
      <Homecartmap cart={products || []} />
    </section>
  );
};

export default Homecarts;