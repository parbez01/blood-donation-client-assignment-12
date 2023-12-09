

const Volunteers = () => {
    return (
        <div>

{/* <div><h2 className="text-5xl font-bold text-center mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text ">Meet Our Team Members</h2></div> */}

<div className="grid grid-cols-1 lg:grid-cols-3 ml-6 gap-6  lg:ml-28 mt-24 mb-16">


    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
        
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="h-full" src="https://i.ibb.co/n6mZW7q/smiling-doctor-with-strethoscope-isolated-grey.jpg" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               Joshan Khaypeia
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
               Co-Founder
            </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
            <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
    </div>

    {/* 2nd card */}
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/CBjMzTc/female-doctor-hospital-with-stethoscope.jpg" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               Nora Khaypeia
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Co-Founder
            </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
            <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
    </div>

    {/* 3rd card */}

    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/CWz4CKM/young-smiling-doctor-with-stethoscope.jpg" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Alex Joshan Deo
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
               Co-Founder
            </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
            <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
    </div>

</div>
            
        </div>
    );
};

export default Volunteers;