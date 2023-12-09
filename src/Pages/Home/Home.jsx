
import Banner from "../../Component/Banner";
import Contact from "../../Component/Contact";
import Feature from "../../Component/Feature";
import Volunteers from "../../Component/Volunteers";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Home = () => {
 
    
    return (
        <div>
            <Navbar></Navbar>         
            <Banner></Banner>
            <Feature></Feature>
            <Contact></Contact>
            <Volunteers></Volunteers>
            <Footer></Footer>      
        </div>
    );
};

export default Home;