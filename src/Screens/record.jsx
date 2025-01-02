import React, { useState, useEffect } from 'react';

// JSON Data
import usersData from "../../users-database.json";

// Navigation
import { useNavigate } from "react-router-dom";

// Router params
import { useParams } from 'react-router-dom';

const RecordScreen = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState()

    useEffect( () => {
        setUser(usersData.find( user => user.id == id ));
    }, [] )

    return (
        <div className="py-3.5">
            <div>
                <h1 className="text-center text-2xl font-bold">{ user && user.name }</h1>
                <p className="text-center text-xs">{ user && user.email }</p>
            </div>

            {
                user &&
                <div className="border-2 lg:mx-72 md:mx-24 my-6 p-3 px-6 rounded-2xl">

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Name:</p>
                        <p>{ user.name }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Email:</p>
                        <p>{ user.email }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Age:</p>
                        <p>{ user.age }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Gender:</p>
                        <p>{ user.gender }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Address:</p>
                        <p>{ user.address }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Active:</p>
                        <p 
                            className='font-medium px-2.5 rounded-sm text-white' 
                            style={{ background: `${ !user.isActive ? "red" : "green" }` }}
                        >
                                { !user.isActive ? "Inactive" : "Active" }
                        </p>
                    </div>

                </div>
            }

            <p 
                className='text-center cursor-pointer font-semibold text-blue-600'
                onClick={ () => navigate("/") }
            >Go Back</p>
        </div>
    )
}

export default RecordScreen;
