import axios from "axios";
import { Link } from "react-router-dom";


const AllUserTabular = ({data,refetch}) => {
    const {_id,image,district,name,date,pending,email,role} = data
    const dateData = date?.split(',')[0]
    const timeData = date?.split(',')[1]

    

    console.log(dateData,timeData)

    const handleUnblock = (id) =>{
      axios.patch(`https://blood-donation-server-two.vercel.app/unblock/${id}`)
      .then(res=>{
        console.log(res.data)
        refetch()
      })
    }

    const handleBlock = (id) =>{
      axios.patch(`https://blood-donation-server-two.vercel.app/block/${id}`)
      .then(res=>{
        console.log(res.data)
        refetch()
      })
    }

    const handleVolunteer = (id) =>{
      axios.patch(`https://blood-donation-server-two.vercel.app/volunteer/${id}`)
      .then(res=>{
        console.log(res.data)
        refetch()
      })
    }

    return (
        <tr className="lg:w-[1600px] w-[300px]">
      
        <td>
            <div className="flex items-center lg:gap-3">
                <div className="avatar">
                    <div className="lg:w-24 rounded-xl">
                        <img src={image} />
                    </div>
                </div>

            </div>
        </td>

        <td>
            <div className="font-medium lg:text-base">{email}</div>
        </td>

        <td>
            <div>

                <div className="text-sm opacity-70 ">{name}</div>
            </div>
        </td>

        <th>
          <p>
        {
            pending ? 'blocked':'active'
        }
            </p>
        </th>
       
        <td>
          {
            pending ?  <button onClick={()=>handleUnblock(_id)} className="bg-red-400 lg:p-3 p-1 rounded-lg">Unblock</button> :  <button onClick={()=>handleBlock(_id)} className="bg-red-400 lg:p-3 p-1 rounded-lg">Block</button>
          }
        </td>

        <td>
           {
            role == 'volunteer' ? <button onClick={()=>handleVolunteer(_id)} className="bg-red-400 lg:p-3 p-1 rounded-lg">Already Volunteer</button> :  <button onClick={()=>handleVolunteer(_id)} className="bg-red-400 lg:p-3 p-1 rounded-lg">Make Volunteer</button>
           }
        </td>
        
    </tr>
    );
};

export default AllUserTabular;