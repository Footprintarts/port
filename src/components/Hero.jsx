import images from "../assets/images/images";

const Hero = () => (
  <section className="section hero">
    <div className="container">
      <figure
        className="hero-banner img-holder"
        style={{ "--width": 240, "--height": 240 }}
      >
        <img
          src={images.Profile02}
          alt="Charles M."
          width="240"
          height="240"
          className="img-cover"
        />
      </figure>
      <div className="hero-content">
        <span className="label-large section-subtitle uppercase leading-loose">
          FrontEnd Developer
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-1 grad-text from-zinc-100 via-lime-400 to-[#adfe02]">
          Charles Mallya.
        </h1>
        <p className="body-large section-text">
          Lorem ipsum dolor sit amet consectetur. Quam ut feugiat ut porta morbi
          lobortis tristique.
        </p>
        <div className="btn-wrapper">
          <a href="mailto:khalid@techgulf1.com" className="chip">
            <span>
              <img src={images.mail} alt="" className="" />
            </span>
            <span className="label-large">mallyac17@gmail.com</span>
            <div className="state-layer"></div>
          </a>
          <a href="tel:+213908539206" className="chip">
            <span>
              <img src={images.call} alt="" className="" />
            </span>
            <span className="label-large">+213908539206</span>
            <div className="state-layer"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
