

const BlogCard = ({data}) => {
    const {short_details,image,long_details,date} = data
    return (
        <div>

<div
  className="relative flex lg:w-[1600px] mt-10 flex-col mx-auto overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img className="lg:h-[700px] h-[400px] w-full"
      src={image}
      alt="ui/ux review check" />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {short_details}
    </h4>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
     {long_details}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
   
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
      {date}
    </p>
  </div>
</div> 
            
        </div>
    );
};

export default BlogCard;