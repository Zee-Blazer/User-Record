
// Icons
import { FaRegUser } from "react-icons/fa";

// Navigation
import { useNavigate } from "react-router-dom";

const ClickUserComponent = ({ name, email, id }) => {

    const navigation = useNavigate();

    return (
        <>
            <div className="flex items-center justify-between border-b-2 pb-2.5 my-4">
                <div className="flex items-center">
                    <FaRegUser className="text-3xl md:mr-4 lg:mr-7" />
                    <div>
                        <p className="text-lg">{ name }</p>
                        <p className="text-xs">{ email }</p>
                    </div>
                </div>

                <div 
                    className="bg-blue-600 py-2.5 px-3 rounded-lg cursor-pointer"
                    onClick={ () => navigation(`/about/${id}`) }
                >
                    <p className="text-white font-bold">View Details</p>
                </div>
            </div>
        </>
    )
}

export default ClickUserComponent;
