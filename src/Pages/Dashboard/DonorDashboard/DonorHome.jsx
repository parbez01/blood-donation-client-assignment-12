import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const DonorHome = () => {
    const {user} = useContext(AuthContext)
  

    return (
        <div>
           <h1 className="text-4xl bg-sky-300 p-4 text-center font-bold">Welcome {user?.email}</h1> 
        </div>
    );
};

export default DonorHome;