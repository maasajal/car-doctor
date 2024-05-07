import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
      <div className="relative">
        <img className="w-4/5 rounded-lg" src={person} alt="About person" />
        <img
          className="absolute right-0 bottom-0 border-8 w-2/3 rounded-lg"
          src={parts}
          alt="about parts"
        />
      </div>
      <div className="space-y-5">
        <p className="text-[#FF3811]">About us</p>
        <h2 className="text-4xl font-bold max-w-72">
          We are qualified & of experience in this field
        </h2>
        <p className="leading-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
        <p className="leading-8">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
        <Link
          to="get-more-info"
          className="btn bg-[#FF3811] border-none px-5 text-white"
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
};
export default About;
