import { NavLink } from "react-router";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="flex mx-1 mt-0.5">
      <NavLink to="/" className="font-bold text-blue-950">
        Mock Shop
      </NavLink>
      <div className="mx-auto flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              "text-blue-950 hover:text-purple-900 hover:scale-105 transition-transition-all duration-300",
              { "underline decoration-blue-950": isActive },
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            clsx(
              "text-blue-950 hover:text-purple-900 hover:scale-105 transition-transition-all duration-300",
              { "underline decoration-blue-950": isActive },
            )
          }
        >
          Shop
        </NavLink>
      </div>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          clsx(
            "flex gap-1 font-semibold text-blue-950 hover:scale-105 hover:text-purple-900 transition-all duration-300",
            { "underline decoration-blue-950": isActive },
          )
        }
      >
        <ShoppingCart />
        <span>Cart</span>
      </NavLink>
    </div>
  );
}
