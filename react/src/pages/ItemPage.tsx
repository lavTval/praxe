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
  });

  if (!data) {
    return (
      <>
        <h1>404</h1>
        <button>
          <NavLink to="/">Return home</NavLink>
        </button>
      </>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex justify-center items-center grow">
          <div className="flex w-3/4">
            <img src={data.images[0]} alt="Product image" />
            <div className="ml-3 max-w-1/2">
              <h2 className="text-4xl text-blue-950 font-bold">{data.title}</h2>
              <p className="text-center">{data.description}</p>
              <p>${data.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
