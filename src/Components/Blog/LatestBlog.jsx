import { Link } from "react-router-dom";
import imgtwo from "../../Assets/Images/Blog/Webp/Corporate.webp";

const LatestBlog = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-roboto text-3xl font-semibold">Latest Blog</h2>
        <div className="flex flex-wrap mt-5">
          <div className="max-w-[280px] min-h-[357px] rounded-xl bg-[#fff] border-2 border-[#E8E7E9] hover:border-[#64ccc5] transition-all duration-700 p-4 cursor-pointer">
            <Link to="/blog/areview" className="no-underline text-inherit">
              <img
                className="rounded-xl max-w-[248px] min-h-[168px]"
                src={imgtwo}
                alt=""
              />
              <h3 className="font-roboto text-lg leading-121 font-bold mt-6 mb-0">
                A Review of Cars with Advanced Infotainment Systems
              </h3>
              <p className="font-dm font-medium text-base leading-121 text-black mt-7">
                Dasteen
              </p>
              <ul className="flex items-center gap-10 font-dm font-normal text-xs leading-121 text-light_black mb-0">
                <li>Jan 10, 2024</li>
                <li className="list-disc">3 Min Read</li>
              </ul>
            </Link>
          </div>
          <div className="max-w-[280px] min-h-[357px] rounded-xl bg-[#fff] border-2 border-[#E8E7E9] hover:border-[#64ccc5] transition-all duration-700 p-4 cursor-pointer">
            <Link to="/blog/areview" className="no-underline text-inherit">
              <img
                className="rounded-xl max-w-[248px] min-h-[168px]"
                src={imgtwo}
                alt=""
              />
              <h3 className="font-roboto text-lg leading-121 font-bold mt-6 mb-0">
                A Review of Cars with Advanced Infotainment Systems
              </h3>
              <p className="font-dm font-medium text-base leading-121 text-black mt-7">
                Dasteen
              </p>
              <ul className="flex items-center gap-10 font-dm font-normal text-xs leading-121 text-light_black mb-0">
                <li>Jan 10, 2024</li>
                <li className="list-disc">3 Min Read</li>
              </ul>
            </Link>
          </div>
          <div className="max-w-[280px] min-h-[357px] rounded-xl bg-[#fff] border-2 border-[#E8E7E9] hover:border-[#64ccc5] transition-all duration-700 p-4 cursor-pointer">
            <Link to="/blog/areview" className="no-underline text-inherit">
              <img
                className="rounded-xl max-w-[248px] min-h-[168px]"
                src={imgtwo}
                alt=""
              />
              <h3 className="font-roboto text-lg leading-121 font-bold mt-6 mb-0">
                A Review of Cars with Advanced Infotainment Systems
              </h3>
              <p className="font-dm font-medium text-base leading-121 text-black mt-7">
                Dasteen
              </p>
              <ul className="flex items-center gap-10 font-dm font-normal text-xs leading-121 text-light_black mb-0">
                <li>Jan 10, 2024</li>
                <li className="list-disc">3 Min Read</li>
              </ul>
            </Link>
          </div>
          <div className="max-w-[280px] min-h-[357px] rounded-xl bg-[#fff] border-2 border-[#E8E7E9] hover:border-[#64ccc5] transition-all duration-700 p-4 cursor-pointer">
            <Link to="/blog/areview" className="no-underline text-inherit">
              <img
                className="rounded-xl max-w-[248px] min-h-[168px]"
                src={imgtwo}
                alt=""
              />
              <h3 className="font-roboto text-lg leading-121 font-bold mt-6 mb-0">
                A Review of Cars with Advanced Infotainment Systems
              </h3>
              <p className="font-dm font-medium text-base leading-121 text-black mt-7">
                Dasteen
              </p>
              <ul className="flex items-center gap-10 font-dm font-normal text-xs leading-121 text-light_black mb-0">
                <li>Jan 10, 2024</li>
                <li className="list-disc">3 Min Read</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
