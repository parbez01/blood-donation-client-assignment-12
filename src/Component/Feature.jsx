

const Feature = () => {
    return (
        <div>

       <div className="text-center mt-10 mb-10 space-y-6">
       <h1 className="text-red-600 text-base">WHAT WE DO</h1>
        <h1 className="text-3xl font-semibold">Our Best Feature</h1>
       </div>

       <div className="flex  gap-10 items-center lg:w-[1100px] mx-auto">
        <div className="flex-1">
            <img src="https://i.ibb.co/HNwLZgp/patient-getting-chemotherapy-treatment.jpg" alt="" />
        </div>
        <div className="flex-1 lg:space-y-3">
            <h1 className="text-6xl font-bold text-gray-400">01</h1>
            <p className="text-2xl font-bold ">Blood Donation</p>
            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
            <button className="bg-red-500 p-3 mt-4 mb-4 text-white font-bold">Read More</button>
        </div>
       </div>

       {/* 2nd card */}

      <div className="mt-10">
      <div className="flex  gap-10 items-center lg:w-[1100px] mx-auto">
       
       <div className="flex-1 lg:space-y-3 text-right">
           <h1 className="text-6xl font-bold text-gray-400">02</h1>
           <p className="text-2xl font-bold ">Health Check</p>
           <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
           <button className="bg-red-500 p-3 mt-4 mb-4 text-white font-bold">Read More</button>
       </div>

       <div className="flex-1">
           <img src="https://i.ibb.co/pR4S7MF/doctor-examines-patient-medicine-health-care-concept.jpg" alt="" />
       </div>
       
      </div>
      </div>

      {/* 3rd card */}

      <div className="mt-10">
      <div className="flex  gap-10 items-center lg:w-[1100px] mx-auto">

      <div className="flex-1">
           <img src="https://i.ibb.co/wRSfgRP/coronavirus-blood-samples-arrangement-lab.jpg" alt="" />
       </div>
       
       <div className="flex-1 lg:space-y-3 ">
           <h1 className="text-6xl font-bold text-gray-400">03</h1>
           <p className="text-2xl font-bold ">Blood Bank</p>
           <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
           <button className="bg-red-500 p-3 mt-4 mb-4 text-white font-bold">Read More</button>
       </div>

      
       
      </div>
      </div>
            
        </div>
    );
};

export default Feature;