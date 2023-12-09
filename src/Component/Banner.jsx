import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

            <div className="relative">
                <img src="https://i.ibb.co/hRX2p1p/ravi24-may-7.jpg" alt="" />
            </div>

            <div className="absolute lg:-mt-[280px] -mt-[140px] ml-[50px] lg:ml-[500px] flex gap-10 bg-white lg:p-10 p-4 rounded-lg shadow-2xl">
                <Link to='/registration'>  <button className=" btn btn-outline btn-error lg:text-2xl bg-white">Join As a Donner</button></Link>
              <Link to='/search'>  <button className=" btn btn-outline btn-error lg:text-2xl bg-white">Search Donors</button></Link>
            </div>

        </div>
    );
};

export default Banner;