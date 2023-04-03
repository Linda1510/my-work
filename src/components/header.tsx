import logo from "./../assets/logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner"></div>
      <div>
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <div className="header__actions">
        <nav className="header__nav">
          <a className="header__nav__item" href="">
            Home
          </a>
          <a className="header__nav__item " href="">
            Aabout
          </a>
        </nav>
        <div>IS</div>
      </div>
      <div className="header__hamburger">
        <img src={hamburger} alt="hamburger" />
      </div>
    </header>
  );
};
export default Header;
