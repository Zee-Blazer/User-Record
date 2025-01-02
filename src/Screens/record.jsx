import React, { useState, useEffect } from 'react';

// JSON Data
import usersData from "../../users-database.json";

// Axios API fetch 
import axios from 'axios';

// Navigation
import { useNavigate } from "react-router-dom";

// Router params
import { useParams } from 'react-router-dom';

const RecordScreen = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [users, setUsers] = useState()
    const [data, setData] = useState();

    useEffect( () => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setData(res.data);
            } catch(err) {}
        }

        fetchData();
        setUsers(usersData.find( user => user.id == id ));
    }, [] )

    console.log(data);

    return (
        <div className="py-3.5">
            <div>
                <h1 className="text-center text-2xl font-bold">{ data && data.name }</h1>
                <p className="text-center text-xs">{ data && data.email }</p>
            </div>

            {
                data &&
                <div className="border-2 lg:mx-72 md:mx-24 my-6 p-3 px-6 rounded-2xl">

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Name:</p>
                        <p>{ data.name }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Email:</p>
                        <p>{ data.email }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Username:</p>
                        <p>{ data.username }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Website:</p>
                        <p>{ data.website }</p>
                    </div>

                    <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Address:</p>
                        <p>{ data.address.street } - { data.address.suite }, { data.address.city }</p>
                    </div>

                    {/* <div className="flex my-0.5">
                        <p className="text-base font-bold mr-1.5 min-w-20">Phone:</p>
                        <p 
                            className='font-medium px-2.5 rounded-sm text-white' 
                        >
                            { data.phone }
                        </p>
                    </div> */}

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
