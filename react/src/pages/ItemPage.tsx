import { useParams } from "react-router";
import Header from "../components/Header";
import { mockProducts } from "../../data";
import type { Product } from "../../types";
import { NavLink } from "react-router";

export default function ItemPage() {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const data = mockProducts.find((p: Product) => {
    if (p.id === id) {
      return p;
    }
  })

  if (!data) {
    return (
      <>
      <h1>404</h1>
      <button><NavLink to="/">Return home</NavLink></button>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div>Item</div>
        <p>{data.title}</p>
      </>
    );
  }
}
