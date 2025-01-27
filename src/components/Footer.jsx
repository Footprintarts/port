import time from "../helpers/time";

const Footer = () => {
  return (
    <div className="footer footer">
      <div className="container">
        <p className="body-medium text-zinc-400">
          Copyright {time.year}. All right reserved by footprintarts
        </p>
      </div>
    </div>
  );
};

export default Footer;
