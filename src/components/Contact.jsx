import images from "../assets/images/images";
import svg from "../assets/svg/svg";

const ContactForm = () => (
  <form action="" method="post" className="contact-form">
    <h3 className="title-large grad-head">Let’s Work Together.</h3>

    <div className="input-wrapper">
      <input
        type="text"
        name="name"
        className="px-4 py-[13px] bg-zinc-900 "
        placeholder="Name*"
        required
      />

      <input
        type="email"
        name="email"
        className="px-4 py-[13px] bg-zinc-900 "
        placeholder="Email*"
        required
      />

      <input
        type="text"
        name="subject"
        className="px-4 py-[13px] bg-zinc-900 "
        placeholder="Subject"
      />

      <textarea
        name="message"
        placeholder="Message*"
        className="h-[126px] p-4 bg-zinc-900 border border-zinc-100"
        required
      ></textarea>

      <button
        className="p-4 py-5 mt-2  bg-lime-600 hover:bg-lime-50 hover:text-lime-600 hover:shadow-2xl hover:shadow-lime-500 transition-all duration-300 ease-in-out rounded-full"
        type="submit"
      >
        <span className="label-large">Send Message</span>

        <div className="state-layer"></div>
      </button>
    </div>
  </form>
);

const Contact = () => (
  <section className="section  contact-tab" data-tab-content="contact">
    <div className="container">
      <div className="contact-info">
        <h4 className="section-title title-small grad-head">Contact Info</h4>

        <ul className="contact-info-list">
          <li className="contact-info-item">
            <div className="icon-box">
              <span>
                <img src={images.mail} alt="" className="" />
              </span>
            </div>

            <div className="info-content">
              <p className="label-small  text-lime-300">MAIL ME</p>

              <a href="mailto:khalid@techgulf1.com" className="label-small">
                mallyac17@gmail.com
              </a>

              <a href="mailto:khalid@service.com" className="label-small">
                footprintarts17@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-info-item">
            <div className="icon-box">
              <span>
                <img src={images.call} alt="" className="" />
              </span>
            </div>

            <div className="info-content">
              <p className="label-small  text-lime-300">CONTACT ME</p>

              <a href="tel:+2382395632498" className="label-small">
                +2382395632498
              </a>

              <a href="tel:+2323982609238" className="label-small">
                +2323982609238
              </a>
            </div>
          </li>

          <li className="contact-info-item">
            <div className="icon-box">
              <span>
                <img src={images.location} alt="" className="" />
              </span>
            </div>

            <div className="info-content">
              <p className="label-small  text-lime-300">ADDRESS</p>

              <a href="#" className="label-small">
                Dar es Salaam, Ilala District, 12345, Tanzania
              </a>
            </div>
          </li>
        </ul>

        <h4 className="title-small grad-head">Social Info</h4>

        <div className="social-list">
          <a
            href="https://linkedin.com/in/charles-mallya-a26530280"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 rounded-lg"
          >
            <img src={svg.linkedIn} alt="" className="w-10" />
          </a>

          <a
            href="https://github.com/Footprintarts"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item hover:bg-zinc-950 transition-all hover:-translate-y-1 duration-300 rounded-lg"
          >
            <img src={svg.github} alt="" className="" />
          </a>

          <a
            href="#"
            className="social-item hover:bg-gradient-to-t from-lime-600 hover:-translate-y-1 to-orange-500 transition-all duration-300 rounded-lg"
          >
            <img src={svg.instagram} alt="" className="" />
          </a>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default Contact;
