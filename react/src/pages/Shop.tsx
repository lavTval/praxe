import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import { mockProducts } from "../../data.ts";
import type { Product } from "../../types.ts";

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex grow justify-center items-center">
        <div className="flex flex-wrap justify-center gap-5">{
          mockProducts.map((data: Product) => {
            return <ItemCard name={data.title} image={data.images[0]} price={data.price} id={data.id} />
          })
          }</div>
      </div>
    </div>
  );
}
