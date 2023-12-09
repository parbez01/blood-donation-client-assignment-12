

const BloodCard = ({ service }) => {
    const { name, image, upazila, district, bloodGroup, email } = service
    console.log(image);
    return (
        <div>



            <div className="relative  flex mt-10 flex-col text-gray-700 bg-white shadow-md bg-clip-border mb-20  w-96">
                <div className="relative  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border  h-80">
                    <img src={image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Name: {name}
                    </h4>
                    <h4 className="block mb-2 font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Blood Group: {bloodGroup}
                    </h4>
                    <h4 className="block mb-2 font-sans text-base antialiased font-semibold leading-snug tracking-normal text-gray-500">
                        District: {district}
                    </h4>
                </div>

            </div>


        </div>
    );
};

export default BloodCard;