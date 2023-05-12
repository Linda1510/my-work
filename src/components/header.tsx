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
          <a className="header__nav__item" href="/">
            Home
          </a>
          <a className="header__nav__item " href="/exe">
            Exercises
          </a>
          <a className="header__nav__item " href="/ispit">
            Ispit
          </a>
          <a className="header__nav__item " href="/mlinar">
            Mlinar
          </a>
          <a className="header__nav__item " href="/varijable">
            Varijable
          </a>
          <a className="header__nav__item " href="/petlje">
            Petlje
          </a>
          <a className="header__nav__item " href="/vjezba2604">
            Vjezba2604
          </a>
          <a className="header__nav__item " href="/vjezba2804">
            Vjezba2804
          </a>
          <a className="header__nav__item " href="/vjezba0205">
            Vjezba0205
          </a>
          <a className="header__nav__item " href="/vjezba0305">
            Vjezba0305
          </a>
          <a className="header__nav__item " href="/breweries">
            Breweries
          </a>
          <a className="header__nav__item " href="/pokemon">
            Pokemon
          </a>
          <a className="header__nav__item " href="/europe">
            Europe
          </a>
          <a className="header__nav__item " href="/africa">
            Africa
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
