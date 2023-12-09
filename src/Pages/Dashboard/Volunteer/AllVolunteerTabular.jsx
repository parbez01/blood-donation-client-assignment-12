

const AllVolunteerTabular = ({data}) => {
    const {_id,image,district,name,date,pending,email} = data
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
       
      

       
        
    </tr>
    );
};

export default AllVolunteerTabular;