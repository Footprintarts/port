import images from "../assets/images/images";

const Header = () => (
  <header className="topbar bg-gradient-to-r from-transparent via-transparent to-lime-300/20 backdrop-blur">
    <a href="#" className="logo">
      <img
        src={images.Logo_dark}
        alt="Devfolio"
        width="145"
        height="32"
        className="dark"
      />
      {/* <img
        src={images.Logo_light}
        alt="Devfolio"
        width="145"
        height="32"
        className="light"
      /> */}
    </a>

    <button className="icon-btn theme-btn" data-theme-btn aria-hidden="true">
      {/* <span className="material-symbols-outlined dark" aria-hidden="true">
        dark_mode
      </span> */}

      <span className="" aria-hidden="true">
        <img src={images.sun} alt="" className="w-10" />
      </span>

      <div className="state-layer"></div>
    </button>
  </header>
);

export default Header;
