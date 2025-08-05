import type { ProductDTO } from "../../services/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function ListingCard({ product }: Props) {
  return (
    <div className="product-card">
        <h5>{product.name}</h5>
        <h3>R$ {product.price.toFixed(2)}</h3>
    </div>
  );
}
