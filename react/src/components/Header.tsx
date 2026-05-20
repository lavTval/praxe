import { NavLink } from "react-router"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <div className="flex">
      <span>Mock Shop</span>
      <div className="mx-auto flex gap-3">
        <NavLink to="/" className={({ isActive}) => isActive ? "underline" : ""}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive}) => isActive ? "underline" : ""}>Shop</NavLink>
      </div>
      <NavLink to="/cart"><ShoppingCart /></NavLink>
    </div>
  )
}
