import { useEffect, useState } from "react";
import AllVolunteerTabular from "./AllVolunteerTabular";


const VolunteerDashboard = () => {
    const [allVolunteer,setAllVolunteer] = useState()
    useEffect(()=>{
        fetch('https://blood-donation-server-two.vercel.app/bookings')
        .then(res => res.json())
         .then(data => setAllVolunteer(data))
    },[])
    return (
        <div>

            <h2 className="text-3xl bg-orange-300 p-5 text-center font-bold">Total Donate: {allVolunteer?.length}</h2>

            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-200 ">
                        <tr className="lg:w-[300px] w-[50px]">

                            <th>Image</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody className="w-[100px] ">
                        {
                           allVolunteer?.map(data => <AllVolunteerTabular key={allVolunteer._id} data={data}  ></AllVolunteerTabular>)
                        }
                    </tbody>



                </table>
            </div>
            
        </div>
    );
};

export default VolunteerDashboard;