import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-stone-800 min-w-full flex justify-between items-center px-4 py-2">
      <a href="/" title="ir a inicio" className="px-2 hover:bg-stone-700">
        <h1 className="text-stone-100 text-lg font-bold uppercase">
          abm empleados
        </h1>
        <h2 className="text-stone-300 font-bold">
          crud employees
        </h2>
      </a>

      <div className="sm:hidden">
        {
          <button>➰</button> ||
          <button>〰</button>
        }
      </div>

      <ul className="hidden sm:flex gap-12">
        <li>
          <Link
            className="text-stone-300 hover:text-stone-100 hover:underline"
            title="ir a inicio"
            to="/home"
          >Inicio</Link>
        </li>
        <li>
          <Link
            className="text-stone-300 hover:text-stone-100 hover:underline"
            to="/employee"
            title="ir a empleados"
          >Empleados</Link>
        </li>
        <li>
          <Link
            className="text-stone-300 hover:text-stone-100 hover:underline"
            to="/asset"
            title="ir a activos"
          >Activos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
