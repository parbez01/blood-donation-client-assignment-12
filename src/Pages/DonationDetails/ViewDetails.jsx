
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import axios from "axios";
import Swal from "sweetalert2";


const ViewDetails = () => {




    const { id } = useParams()
    const [details, setDetails] = useState({})

    const { name, _id, image, email, bloodGroup, district, upazila, date } = details

    const dateData = date?.split(',')[0]
    const timeData = date?.split(',')[1]
    console.log(dateData, timeData)

    useEffect(() => {
        fetch('https://blood-donation-server-two.vercel.app/bookings')
            .then(res => res.json())
            .then(data => {
                const findData = data.find(item => item._id == id)
                setDetails(findData)
            })
    }, [id])

    console.log(details);

    const handleDetails = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const confirmData = { name, email }

        axios.post('https://blood-donation-server-two.vercel.app/donors', confirmData)
            .then(res => {
                if (res.data.insertedId) {
                    axios.patch(`https://blood-donation-server-two.vercel.app/bookings/${_id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Progress Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })


    }

    return (
        <div>
            <div className="lg:mb-36 mb-10">
                <Navbar></Navbar>
            </div>

            <div className="relative lg:flex  bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  flex-row">
                <div
                    className="relative lg:w-1/3 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={image}
                        alt="card-image" className="object-cover lg:w-[500px]  h-[500px] w-[400px] lg:h-[600px]" />
                </div>
                <div className="lg:p-36 p-10 lg:ml-0 ml-10">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        Name: {name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Email: {email}
                    </h4>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        District: {district}
                    </p>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Upazila: {upazila}
                    </p>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Blood Group: {bloodGroup}
                    </p>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Date: {dateData}
                    </p>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Time: {timeData}
                    </p>
                    <div className="flex justify-end mb-10">

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className=" bg-red-400  text-white hover:bg-red-600  items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" onClick={() => document.getElementById('my_modal_5').showModal()}>Donate</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-slate-500 -mt-36 mb-32">

                                <form onSubmit={handleDetails}>
                                    <input className="w-[300px] p-2 rounded-lg" type="text" name="name" id="" defaultValue={name} readOnly /> <br /> <br />
                                    <input className="w-[300px] p-2 rounded-lg" type="text" name="email" id="" defaultValue={email} readOnly /><br />
                                    <button type="submit" className="bg-red-400 mt-10 p-3 rounded-lg text-white font-semibold">Confirm</button>
                                </form>



                                <div className="flex justify-end -mt-12">

                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;