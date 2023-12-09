import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import BloodCard from "./BloodCard";



const SearchPAge = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://blood-donation-server-two.vercel.app/bookings')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        const form = e.target
        const search = form.search.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const email = form.email.value;
        const searchData = services.filter(item => item?.bloodGroup == search || item?.district == district || item?.upazila == upazila || item?.email == email)
      
        setServices(searchData)
       
    }


    return (
        <div>

            <Navbar></Navbar>

            <div className="text-center">



                <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/hRX2p1p/ravi24-may-7.jpg)' }}>
                    <div className="hero-overlay bg-opacity-90"></div>
                    <div className="hero-content text-center text-neutral-content">



                        <form onSubmit={handleSearch} className="join lg:flex flex-col lg:flex-row gap-2">
                            <input name="search" className="input input-bordered join-item" placeholder="Enter Blood Group" />
                            <input name="district" className="input input-bordered join-item" placeholder="Enter Your District" />
                            <input name="upazila" className="input input-bordered join-item" placeholder="Enter Your Upazila" />
                            <input name="email" className="input input-bordered join-item" placeholder="Enter Your Email" />
                            <button type="submit" className="btn join-item lg:rounded-r-full bg-red-500 text-white">Search</button>
                        </form>
                    </div>
                </div>

            </div>

            <div>
            <p className="text-3xl text-center font-bold mt-10 mb-10 bg-red-100 p-3">Total Donation:{services.length}</p>
            </div>
            <div className="grid lg:grid-cols-2 lg:ml-[300px] ml-[10px]">

                {
                    services?.map(service => <BloodCard key={service._id} service={service}></BloodCard>)
                }

            </div>
        </div>
    );
};

export default SearchPAge;