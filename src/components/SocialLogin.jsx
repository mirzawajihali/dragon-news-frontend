import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {

    const {setUser, signInGoogle} = useContext(AuthContext);

    const handleGoogle = () =>{
        signInGoogle()
        .then(result =>{
            const user = result.user;
            setUser(user);
           
        })
        .catch(error =>{
           
               
             console.log(error)
             
         })
    }

    return (
        <div>
             <h1 className='font-bold text-xl mb-4'>Login with - </h1>

            <div className="flex flex-col gap-3">
                <button onClick={handleGoogle} className="btn btn-outline btn-error font-bold "><FaGoogle></FaGoogle> Login with Google</button>
                <button  class="btn btn-outline font-bold"><FaGithub></FaGithub> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;