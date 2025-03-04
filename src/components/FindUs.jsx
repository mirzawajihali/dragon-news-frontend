import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const FindUs = () => {
    return (
        <div className="mt-4">
            <h1 className='font-bold text-xl mb-4'>Find Us </h1>

            <div class="join flex join-vertical *:bg-base-100">
            <button class="btn join-item justify-start "> <FaFacebookSquare /> Facebook</button>
            <button class="btn join-item justify-start"><SiInstagram />Instagram</button>
            <button class="btn join-item justify-start"> <BsTwitterX />Twitter / X</button>
</div>

        </div>
    );
};

export default FindUs;