import logo from "./../assets/Logo.svg";
const Mlinar = () => {
  return (
    <div className="container--black">
      <div className="container">Mlinar</div>
      <div className="container__logo">
        <img src={logo} alt="logo" />
        <a className="container__logo__nav" href="">
          Proizvodi
        </a>
        <a className="container__logo__nav" href="">
          Lokacije
        </a>
        <a className="container__logo__nav" href="">
          Karijere
        </a>
        <a className="container__logo__nav" href="">
          Naša priča
        </a>
        <a className="container__logo__nav" href="">
          Kontakt
        </a>
      </div>

      <h1 className="container__title">
        Najukusniji pekarski proizvodi u susjedstvu
      </h1>
    </div>
  );
};
export default Mlinar;
