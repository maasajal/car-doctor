import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer py-10 px-8 md:px-28 bg-[#151515] text-white mt-10">
        <aside>
          <img src={logo} alt="Car doctor logo" />
          <p className="py-5 leading-6">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <nav>
            <div className="grid grid-flow-col gap-2">
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaGoogle />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaTwitter />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaInstagram />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </aside>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Home</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/services" className="link link-hover">
            Service
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Company</h6>
          <Link to="/" className="link link-hover">
            Why Car Doctor
          </Link>
          <Link to="/about" className="link link-hover">
            About
          </Link>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Support</h6>
          <Link to="#" className="link link-hover">
            Support Center
          </Link>
          <Link to="#Feedback" className="link link-hover">
            FeedBack
          </Link>
          <Link to="#" className="link link-hover">
            Accessability
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
