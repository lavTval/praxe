import { useState } from "react";

interface Props {
  id: number;
  name: string;
  completed: boolean;
  onDelete: (id: number) => void;
}

export default function Task({id, name, completed, onDelete}: Props) {
  const [complete, setComplete] = useState(completed);
  return (
    <div className="flex gap-1">
      <p className={`hover:cursor-pointer ${!complete ? "" : "text-gray-400"}`} onClick={() => setComplete(!complete)}>{name}</p>
      <button onClick={() => onDelete(id)} className="text-gray-200 rounded-full px-2 py-0.5 bg-linear-90 from-blue-600 to-purple-600 hover:scale-105 hover:text-red-600 transition-all">Delete</button>
   </div>
 )
}
