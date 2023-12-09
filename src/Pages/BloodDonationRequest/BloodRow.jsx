import { Link } from "react-router-dom";



const BloodRow = ({ data,handleDelete }) => {
    const { _id, image, name, district, upazila, date,pending } = data
    const dateData = date?.split(',')[0]
    const timeData = date?.split(',')[1]
    console.log(dateData,timeData)

  

    return (

      
         <tr className="lg:w-[1600px] w-[300px]">
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <button className="bg-red-500 lg:p-3 p-1 text-white rounded-xl">Delete</button>
                </button>
            </th>
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
                <div className="font-bold lg:text-xl">{name}</div>
            </td>

            <td>
                <div>

                    <div className="text-sm opacity-70 ">{district}</div>
                </div>
            </td>

            <td>
                {dateData}

            </td>
            <td>
                {timeData}

            </td>
            <td>
               <Link to={`/viewDetails/${_id}`}> <button className="bg-red-400 lg:p-3 p-1 rounded-lg">View Details</button></Link>
            </td>
            <th>
              <p>
                {
                    pending ? 'pending' : 'inprogress'
                }
                </p>
            </th>
        </tr>
      


    );
};

export default BloodRow;