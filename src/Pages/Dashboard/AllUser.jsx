import { useEffect, useState } from "react";
import AllUserTabular from "./AllUserTabular";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllUser = () => {
    // const [allUser,setAllUser]= useState()
    // useEffect(() => {
    //     fetch('https://blood-donation-server-two.vercel.app/bookings')
    //         .then(res => res.json())
    //         .then(data => setAllUser(data))
    // }, [])

    const { data: allUser, refetch } = useQuery({
        queryKey: ['king'],
        queryFn: async () => {
            const res = await axios.get('https://blood-donation-server-two.vercel.app/bookings')
            return res?.data
        }
    })

    return (
        <div>
            <h2 className="text-3xl text-center mt-6 mb-6 bg-[#D1A054] p-3 font-bold">All user: {allUser?.length} </h2>

            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-200 ">
                        <tr className="lg:w-[300px] w-[50px]">

                            <th>Image</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Button</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className="w-[100px] ">
                        {
                            allUser?.map(data => <AllUserTabular key={allUser._id} data={data} refetch={refetch} ></AllUserTabular>)
                        }
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default AllUser;