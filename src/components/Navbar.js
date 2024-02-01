import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp.js";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  
  render() {
    const login = localStorage.getItem("login");
    const name = localStorage.getItem("firstName");
    return (
      <nav className="NavbarItems">
        <a href="/"><h1 className="navbar-logo">WanderWise</h1></a>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas-fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {login === null&&<Link to="/signup" className="nav-links">SignUp</Link>}
          {login !== null &&<Link to="/" className="nav-links">{name}</Link>}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
