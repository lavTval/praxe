import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import { mockProducts } from "../../data.ts";
import type { Product } from "../../types.ts";

export default function Shop() {
  return (
    <>
      <Header />
      <div>
        <h1>Shop</h1>
        <div className="flex gap-5">{
          mockProducts.map((data: Product) => {
            return <ItemCard name={data.title} image={data.images[0]} price={data.price} id={data.id} />
          })
          }</div>
      </div>
    </>
  );
}
