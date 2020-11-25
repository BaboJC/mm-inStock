import logo from "../assets/Logo/InStock-Logo.svg"
import Navigation from "./Navigation"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="InStock Logo" />
      <Navigation />
    </header>
  )
}

export default Header
