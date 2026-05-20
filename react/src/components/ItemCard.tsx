import { useNavigate } from "react-router";

interface Props {
  image: string;
  name: string;
  price: number;
  id: string;
  className?: string;
}

export default function ItemCard({ image, name, price, id, className }: Props) {
  const navigate = useNavigate();

  function handleClick(id: string) {
    console.log("Redirect");
    navigate(`/item/${id}`);
  }

  return (
    <div
      className={`border-4 rounded-2xl border-blue-500 w-3/12 hover:scale-105 transition-transform duration-300 ${className}`}
      onClick={() => handleClick(id)}
    >
      <img src={image} alt="Product image" className="mt-1 rounded-2xl" />
      <div className="flex">
        <p className="mr-auto">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
