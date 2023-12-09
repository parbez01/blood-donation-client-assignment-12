import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Hook/UseAdmin";
import useVolunteer from "../../Hook/useVolunteer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Dashboard = () => {

    const [isAdmin] = UseAdmin()
    const [isVolunteer] = useVolunteer()
    const { user } = useContext(AuthContext)

    return (


        <div className="flex ">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-5">

                    {
                        isAdmin && user && !isVolunteer ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/allUser'}>
                                    All User</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/allBloodRequest'}>
                                    All Blood Donation Request</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/contentManagement'}>
                                    Content Management</NavLink>
                            </li>
                        </>
                            : ''
                    }

                    {
                        isVolunteer && user && !isAdmin? <>
                            <li>
                                <NavLink to={'/dashboard/volenteerHome'}>
                                    Volenteer Home</NavLink>
                            </li>



                            <li>
                                <NavLink to={'/dashboard/allBloodDonationRequest'}>
                                    All Blood Donation Request</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/contentManagement'}>
                                    Content Management</NavLink>
                            </li>
                        </>
                            : ''
                    }

                    {
                        user && !isAdmin && !isVolunteer ? <>
                            <li>
                                <NavLink to={'/dashboard/donorHome'}>
                                    Donor Home</NavLink>
                            </li>


                            <li>
                                <NavLink to={'/dashboard/myDonationRequest'}>
                                    My Donation Request</NavLink>
                            </li>



                            <li>
                                <NavLink to={'/dashboard/createDonationRequest'}>
                                    Create Donation Request</NavLink>
                            </li>
                        </>
                            : ''
                    }


                    <hr />
                    <li>
                        <NavLink to={'/'}>
                            Home</NavLink>
                    </li>

                    {/* donor dashboard */}


                    {/* volunter dashboard */}



                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>


    );
};

export default Dashboard;