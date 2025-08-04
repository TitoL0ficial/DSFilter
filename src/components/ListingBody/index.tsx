import FilterCard from '../FilterCard';
import ListingCard from '../ListingCard';

export default function ListingBody() {

  return (
    <main>
        <section className="container">
            <FilterCard/>
        </section>    
        <section className="container">
            <ListingCard/>
        </section> 
    </main>
  );
}
