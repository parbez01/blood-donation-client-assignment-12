/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import moment from "moment/moment";






const Registration = () => {

    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const bloodGroup = form.bloodGroup.value
        const date = form.date.value
        const district = form.district.value;
        const upazila = form.upazila.value
        const image = form.image.value
        // console.log(name, email, password, confirmPassword, bloodGroup, district, upazila,image);

        const donerInfo = { name, email, password, confirmPassword, bloodGroup, district, upazila, image, date, pending: true }
        console.log(donerInfo);

        fetch('https://blood-donation-server-two.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donerInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            // toast.error("This didn't work.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one special character.')
            return;
        }
        else if (password !== confirmPassword) {
            setRegisterError('Password Do Not Match')
            return
        }
        // reset error
        setRegisterError('')
        setSuccessMessage('')

        createUser(email, password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(result.name, result.photoURL)
                    .then(() => {
                        toast.success('Successfully Registration!')
                        navigate(location?.state ? location.state : '/')
                    })
                    .catch(error=>{
                        console.log(error)
                    })





            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }


    return (
        <div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="mr-10 w-1/2 ">

                        </div>
                        <div className="card flex-shrink-0  border-2  border-[#D0D0D0] bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <h1 className="text-center text-4xl text-[#444] font-semibold">Registration</h1>



                                <div className="lg:flex gap-10">
                                    <div className="form-control w-[300px]">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control w-[300px]">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* blood group */}

                                <div className="lg:flex gap-10 ">
                                    <div className="form-control w-[300px]">
                                        <label className="label">
                                            <span className="label-text">Blood Group</span>
                                        </label>

                                        <select name="bloodGroup" className="select select-bordered w-full max-w-xs" required>
                                            <option disabled selected>Select Your Blood Group </option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                        </select>

                                    </div>

                                    {/* district */}
                                    <div className="form-control w-[300px]">
                                        <label className="label">
                                            <span className="label-text">District</span>
                                        </label>

                                        <select name="district" className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Select Your District </option>
                                            <option>Dhaka</option>
                                            <option>Feni</option>
                                            <option>Jessore</option>
                                            <option>Chandpur</option>
                                            <option>Chottogram</option>

                                        </select>

                                    </div>
                                </div>

                                {/* upozila */}
                                <div className="lg:flex gap-10">
                                    <div className="form-control w-[300px]">
                                        <label className="label">
                                            <span className="label-text">Upazila</span>
                                        </label>

                                        <select name="upazila" className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Select Your Upazila </option>
                                            <option>Porshuram</option>
                                            <option>Fulgazi</option>
                                            <option>Sonagazi</option>
                                            <option>Dhaganbuiyyan</option>
                                            <option>Chhagalnaiya</option>

                                        </select>

                                    </div>



                                    <div className="form-control  w-[300px]">
                                        <label className="label">
                                            <span className="label-text">Select Image</span>
                                        </label>

                                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" />

                                    </div>
                                </div>

                                <div className="lg:flex gap-10">
                                    <div className="form-control  w-[300px]">


                                        <input value={moment().format("YYYY-MM-DD, h:mm a")} name="date" className="input input-bordered hidden" />

                                    </div>

                                </div>





                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                                </div>

                                {/* confirm password */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="confirmPassword" className="input input-bordered" required />

                                </div>

                                <div className="form-control mt-6">

                                    <button type="submit" className='btn btn-error'>Registration</button>

                                </div>






                                {
                                    registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                                }
                                {
                                    successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                                }

                                <p className='text-center mt-4'>You Have already account? <Link to='/login'><span className='text-lg text-[#FF3811] font-semibold'>Login</span></Link> </p>

                            </form>

                            <div>
                                <div>
                                    <Toaster
                                        position="top-center"
                                        reverseOrder={false}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Registration;