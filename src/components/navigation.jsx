import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav class="flex items-center justify-center  p-6">
      <ul class="flex space-x-40">
        <li>
          <NavLink to="/home" class="">
            <span className="hover:text-stone-900 font-bold">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" class="">
            <span className="hover:text-stone-900 font-bold">Contact</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" class="">
            <span className="hover:text-stone-900 font-bold">About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
