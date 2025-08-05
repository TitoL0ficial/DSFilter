import './styles.css';
import { useEffect, useState } from 'react';
import FilterCard from '../FilterCard';
import ListingCard from '../ListingCard';
import type { ProductDTO } from '../../services/product';
import * as productService from '../../services/product-service';
import Header from '../Header';
import { ContextListingCard } from '../../utils/context-listing';

type QueryParams = {
  valueMin: number;
  valueMax: number;
}

export default function ListingBody() {

  const MIN_PRICE = 0;
  const MAX_PRICE = Number.MAX_VALUE;

  const [queryParams, setQueryParams] = useState<QueryParams>({
    valueMin: MIN_PRICE,
    valueMax: MAX_PRICE
  });

  const [contextListing, setContextListing] = useState<number>(0);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const result = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
    setProducts(result);
    setContextListing(result.length);
  }, [queryParams]);

  function handleSearch(min: number, max: number) {
    const newMin = min;
    const newMax = max;
    setQueryParams({valueMin: newMin || MIN_PRICE, valueMax: newMax || MAX_PRICE});
  }

  return (
    <>
      <ContextListingCard.Provider value={{contextListing, setContextListing}}>
        <Header/>
        <main>
          <section className="container">
            <FilterCard onSearch={handleSearch}/>
            {
              contextListing > 0 &&
               <div className="listing-card-container mt30">
              {
              products.map(product => (
                  <ListingCard key={product.id} product={product}/>
                ))
              }
              </div>
            }
           
          </section>
        </main>
      </ContextListingCard.Provider>
    </>
  );
}
