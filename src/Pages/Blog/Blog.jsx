import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import BlogCard from "./BlogCard";


const Blog = () => {
    const [blog,setBlog] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>

            <Navbar></Navbar>

            <div>
                {
                    blog?.map(data=><BlogCard key={data._id} data={data}></BlogCard>)
                }
            </div>

           
            
        </div>
    );
};

export default Blog;