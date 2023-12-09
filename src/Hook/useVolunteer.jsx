import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const useVolunteer = () => {
    const {user} = useContext(AuthContext)
    const [isVolunteer,setIsVolunteer] = useState({})
    const myAxios = axios;
    useEffect(()=>{
        myAxios.get('https://blood-donation-server-two.vercel.app/bookings')
        .then(res=>{
            const allUser = res?.data
            const exists = allUser.find(item => item?.email == user?.email && item.role == 'volunteer')
            setIsVolunteer(exists) 
        })
    },[myAxios,user?.email])
    return [isVolunteer,setIsVolunteer]
};

export default useVolunteer;