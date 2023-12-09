import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import UseAdmin from "../../Hook/UseAdmin";
import useVolunteer from "../../Hook/useVolunteer";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = UseAdmin()
    const [isVolunteer] = useVolunteer()
    console.log(isAdmin);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/search'>Search Page</NavLink></li>
        <li><NavLink to='/donation'>Donation Request</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
      
      {
        isAdmin && !isVolunteer && user  ?   <li><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li> :   ''
      }
      {
       !isAdmin && isVolunteer && user  ?   <li><NavLink to='/dashboard/volenteerHome'>Dashboard</NavLink></li> :   ''
      }
      {
        !isVolunteer && !isAdmin && user  ?   <li><NavLink to='/dashboard/donorHome'>Dashboard</NavLink></li> :   ''
      }
 
       
    </>

    return (
        <div>

            <div className="navbar shadow-2xl  bg-base-100 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}

                        </ul>
                    </div>

                  <div>
                   
                  <div className="bg-red-500  lg:w-[500px] lg:py-5 py-3"><h1 className="lg:text-3xl text-white font-bold text-right px-2">Blood Donation</h1>
                  <img className="lg:w-14 lg:h-14 h-10 w-10 lg:ml-20 ml-10 lg:-mt-[40px] rounded-full" src="https://i.ibb.co/y8BFdDH/360-F-274422814-sv23a-GOAILKKk8-Zc-Mg-LKv-HQBTEs-Wh7-WP.jpg" alt="" /></div>
                  </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}

                    </ul>
                </div>
                
                <div className="navbar-end">
                {user && <div className="lg:flex items-center ml-10 lg:mr-3">
                    <img className=" h-10 rounded-full mr-2" src={user?.photoURL} alt="" />
                    <h3>{user.displayName}</h3>

                </div>}
                {
                    user ? <button onClick={handleSignOut} className="btn btn-error">Log Out</button> : <button className="btn btn-error"><Link to='/login'>Login</Link></button>
                }

            </div>

            </div>


        </div>
    );
};

export default Navbar;