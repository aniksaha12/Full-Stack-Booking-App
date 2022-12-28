import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbarContainer">
        <span className="logo">Hotel.com</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">logIn</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
