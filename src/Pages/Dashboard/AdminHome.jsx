
import { BsFillPeopleFill } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
import { CiSquareQuestion } from "react-icons/ci";

const AdminHome = () => {
    return (
        <div>
            <h3 className="text-4xl text-center bg-sky-700 p-4 font-bold text-white">Wellcome</h3>
            <div className="bg-gray-300 lg:p-10">

                <div className="lg:flex flex-row  gap-20">
                    <div className="flex items-center gap-10 bg-white p-14 rounded-md">

                        <div>
                            <BsFillPeopleFill className="h-14 w-14 text-green-400"
                            />
                        </div>
                        <div>
                            <h1>Total Person</h1>
                            <p>03</p>
                        </div>

                    </div>

                    {/* 2nd */}


                    <div className="flex items-center gap-10 bg-white p-14 rounded-md">

                        <div>
                            <BiDonateBlood className="h-14 w-14 text-yellow-300"
                            />
                        </div>
                        <div>
                            <h1>Total Donate</h1>
                            <p>03</p>
                        </div>

                    </div>

                    {/* 3rd */}

                    <div className="flex items-center gap-10 bg-white p-14 rounded-md">

                        <div>
                            <CiSquareQuestion className="h-14 w-14 text-red-300"
                            />
                        </div>
                        <div>
                            <h1>Total Request</h1>
                            <p>03</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AdminHome;