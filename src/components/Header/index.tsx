import { useContext } from "react";
import "./styles.css";
import { ContextListingCard } from "../../utils/context-listing";

export default function Header() {

  const { contextListing } = useContext(ContextListingCard);

  return (
    <header>
      <div className="content container">
        <h1>DSFilter</h1>
        <p>{contextListing} produto(s)</p>
      </div>
    </header>
  );
}
