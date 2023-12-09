import axios from "axios";
import { useEffect, useState } from "react";
import BloodRow from "./BloodRow";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";


const BloodDonationRequest = () => {
    const [requestData, setRequestData] = useState([])
    useEffect(() => {
        axios.get('https://blood-donation-server-two.vercel.app/bookings')
            .then(res => {
                setRequestData(res.data)
            })

    }, [])

  
    const handleDelete = (id) => {
       

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          

            fetch(`https://blood-donation-server-two.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                                 title: "Deleted!",
                                 text: "Your booking has been deleted.",
                                icon: "success"
                              });
                        const remaining = requestData.filter(data => data._id !== id)
                        setRequestData(remaining)
                    }
                })

            }
          });
    }





    return (
        <div>

            <Navbar></Navbar>

            <p className="text-4xl bg-red-300 p-5 font-bold text-center  mt-10 mb-10">Total :{requestData.length}</p>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-200 ">
                        <tr className="lg:w-[300px] w-[50px]">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Date </th>
                            <th>Time </th>
                            <th>Button</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="w-[100px]">
                        {
                            requestData?.map(data => <BloodRow key={data._id} data={data} handleDelete={handleDelete}></BloodRow>)
                        }
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default BloodDonationRequest;