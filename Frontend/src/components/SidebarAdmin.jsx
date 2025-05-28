import { Link } from "react-router-dom";

const SidebarAdmin = ({ handleOptionChange, selectedOption }) => {
    return (
      <>
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile sidebar">
          <p className="menu is-hidden-touch">Menu</p>
          <ul className="menu-list">
            <li>
              <Link
                to="/administracion/contactos"
                className={selectedOption === "contactos" ? "selected" : ""}
                onClick={() => handleOptionChange("contactos")}
              >
                <span className="icon"><i className="fa fa-home"></i></span> Contactos
              </Link>
            </li>
            <li>
              <Link
                to="/administracion/usuarios"
                className={selectedOption === "usuarios" ? "selected" : ""}
                onClick={() => handleOptionChange("usuarios")}
              >
                <span className="icon"><i className="fa fa-info"></i></span> Usuarios
              </Link>
            </li>
          </ul>
        </aside>
      </>
    );
  };
  
  export default SidebarAdmin;