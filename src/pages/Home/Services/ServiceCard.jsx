import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact space-y-5 p-6">
      <div>
        <img src={img} alt={title} className="rounded-lg" />
      </div>
      <div className="">
        <h2 className="card-title">{title} </h2>
        <div className="flex items-center justify-between ">
          <p className="font-semibold text-[#FF3811] ">Price: ${price} </p>
          <button className="btn">
            <FaArrowRight className="text-[#FF3811]" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
