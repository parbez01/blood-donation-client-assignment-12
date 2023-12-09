import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";
const auth = getAuth(app)


const Login = () => {

    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const { signIn,googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('Location in the login page', location);

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        setRegisterError('')
        setSuccessMessage('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                

                // navigate after login
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleLogin)
            .then(result => {
                const loggedInUser = result.user;
                navigate(location?.state ? location.state : '/')
                console.log(loggedInUser);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
        <Navbar></Navbar>
       
        <div>

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-10 w-1/2 ">
                  
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl border-2 p-10 border-[#D0D0D0] bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-4xl text-[#444] font-semibold">Login</h1>
{/* <form onSubmit={handleLogin}> */}

                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                         <button className='btn btn-error'>Login</button>
                           
                        </div>

                       {/* </form> */}
                       {
                            registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                        }
                        {
                            successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                        }

                        <div>
                            <p className="text-center text-lg font-medium mt-2">Or Login with</p>
                            <div onClick={handleGoogleLogIn} className='lg:ml-[140px] mt-4  ml-28 lg:mt-2'>
                                <img className='h-10 bg-gray-200 rounded-full' src="https://i.ibb.co/9qJzmNK/7611770.png" alt="" /></div>
                        </div>

                        <p className='text-center mt-4'>Are You new this website? <Link to='/registration'><span className='text-lg text-[#FF3811] font-semibold'>Register</span></Link> </p>

                    </form>
                </div>
            </div>
        </div>

    </div>
    </div>
    );
};

export default Login;