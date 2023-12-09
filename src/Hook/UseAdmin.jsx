import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const UseAdmin = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin,setIsAdmin] = useState({})
    const myAxios = axios;
    useEffect(()=>{
        myAxios.get('https://blood-donation-server-two.vercel.app/bookings')
        .then(res=>{
            const allUser = res?.data
            const exists = allUser.find(item => item?.email == user?.email && item.role == 'admin')
            setIsAdmin(exists) 
        })
    },[myAxios,user?.email])
    return [isAdmin,setIsAdmin]
};

export default UseAdmin;