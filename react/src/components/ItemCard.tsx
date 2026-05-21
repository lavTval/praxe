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
      className={`w-3/12 hover:scale-105 transition-transform duration-300 flex flex-col ${className}`}
      onClick={() => handleClick(id)}
    >
      <img src={image} alt="Product image" className="w-full min-h-90 aspect-[16/8] object-cover" />
      <div className="flex">
        <p className="mr-auto text-blue-950">{name}</p>
        <p className="text-blue-950 mt-1">${price}</p>
      </div>
    </div>
  );
}
