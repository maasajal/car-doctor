import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner5} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide6" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide2" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner6} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide1" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide3" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide2" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide4" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide3" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide5" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide4" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide6" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-lg" />
          <div className="absolute h-full w-full left-0 flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className="space-y-5 pl-20">
              <h1 className="text-6xl font-semibold max-w-md leading-tight">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-md leading-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <Link
                  to="discover-more"
                  className="btn bg-[#FF3811] border-none text-white"
                >
                  Discover More
                </Link>
                <Link
                  to="latest-project"
                  className="btn btn-outline text-white"
                >
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
            <a href="#slide5" className="btn btn-circle">
              <FaArrowLeft />
            </a>
            <a href="#slide1" className="btn btn-circle">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
